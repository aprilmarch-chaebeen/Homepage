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
        <LeftBtn className="btn_left">
          <BtnImg src={leftsrc} alt="project popup prev button" />
        </LeftBtn>
        <RightBtn className="btn_right">
          <BtnImg src={rightsrc} alt="project popup next button" />
        </RightBtn>
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
  z-index: 100;
  overflow-y: auto;
`;

const TextContainer = styled.div`
  text-align: left;
  padding: 0 27.5vw;
`;

const Title = styled.p`
  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 1.3vw;
  color: #fff;
  margin-top: 5vw;
  margin-bottom: 0;
`;

const Descript = styled.p`
  font-family: 'Pretendard-ExtraLight', sans-serif;
  font-size: 1vw;
  color: #fff;
  margin-top: 0.5vw;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 2vw;
  right: 3vw;
  width: 3vw;
  height: 3vw;
`;

const CloseImg = styled.img`
  width: 2vw;
  height: 2vw;
`;

const SlideContainer = styled(Swiper)`
  position: relative;

  & .swiper-wrapper {
    margin-bottom: 3rem;
  }
`;

const Slide = styled(SwiperSlide)`
  width: 45vw;
`;

const SlideImg = styled.img.attrs({
  loading: 'lazy',
})`
  width: 45vw;
  object-fit: cover;
`;

const LeftBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 19vw;
  left: 22vw;
  z-index: 10;
  cursor: pointer;
`

const RightBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 19vw;
  right: 22vw;
  z-index: 10;
  cursor: pointer;
`

const BtnImg = styled.img`
  width: 2.5vw;
  height: 2.5vw;
`