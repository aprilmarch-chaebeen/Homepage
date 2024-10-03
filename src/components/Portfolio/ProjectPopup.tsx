import styled from 'styled-components';
import closesrc from '../../assets/svg/portfolio/closePopup.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import leftsrc from '../../assets/svg/portfolio/btn_left.svg';
import rightsrc from '../../assets/svg/portfolio/btn_right.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {useMemo} from 'react';

interface ProjectPopupProps {
  title: string;
  descript: string;
  onClose: () => void;
  flag: string;
  num: number;
}

function ProjectPopup({title, descript, onClose, flag, num}: ProjectPopupProps) {
  const slides = useMemo(
    () =>
      Array.from({length: num}, (_, i) => ({
        src: require(`../../assets/images/portfolio/${flag}/${flag}${i}.svg`).default,
        alt: `img ${i + 1}`,
      })),
    [flag, num]
  );

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // 이벤트 전파 중단
    onClose();
  };

  return (
    <Section>
      <CloseBtn onClick={handleClick}>
        <CloseImg src={closesrc} alt="project popup close button" />
      </CloseBtn>
      <TextContainer>
        <Title>{title}</Title>
        <Descript>{descript}</Descript>
      </TextContainer>
      <SlideContainer
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.btn_right',
          prevEl: '.btn_left',
        }}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImg src={slide.src} alt={slide.alt} />
          </Slide>
        ))}
        <button className="btn_left">
          <img src={leftsrc} alt="project popup prev button" />
        </button>
        <button className="btn_right">
          <img src={rightsrc} alt="project popup next button" />
        </button>
      </SlideContainer>
    </Section>
  );
}

export default ProjectPopup;

const Section = styled.section`
  background: rgba(17, 17, 17, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Title = styled.p`
  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 1.3vw;
  color: #fff;
`;

const Descript = styled.p`
  font-family: 'Pretendard-ExtraLight', sans-serif;
  font-size: 1vw;
  color: #fff;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 5vw;
  right: 5vw;
  width: 3vw;
  height: 3vw;
`;

const CloseImg = styled.img`
  width: 3vw;
  height: 3vw;
`;

const SlideContainer = styled(Swiper)`
  & .swiper-wrapper {
    margin-bottom: 3rem;
  }
  & .swiper-pagination-bullet-active {
    width: 1.3vw !important;
    height: 0.55vw !important;
    background-color: #1c46f5 !important;
    border-radius: 2vw !important;
  }
  & .swiper-pagination-bullet {
    width: 0.55vw;
    height: 0.55vw;
    background-color: #ddd;
  }
`;

const Slide = styled(SwiperSlide)`
  width: 50vw;
  height: 27.144vw;
`;

const SlideImg = styled.img.attrs({
  loading: 'lazy',
})`
  width: 50vw;
  height: 27.144vw;
  object-fit: cover;
`;
