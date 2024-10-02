import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import slide1 from '../../assets/svg/portfolio/portfolio_slide1.svg';
import slide2 from '../../assets/svg/portfolio/portoflio_slide2.svg';
import slide3 from '../../assets/svg/portfolio/portfolio_slide3.svg';
import slide4 from '../../assets/svg/portfolio/portfolio_slide4.svg';
import slide5 from '../../assets/svg/portfolio/portfolio_slide5.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import {memo, useMemo} from 'react';

function PortfolioMain() {
  const slides = useMemo(
    () => [
      {src: slide1, alt: 'portfolio slide img1'},
      {src: slide2, alt: 'portfolio slide img2'},
      {src: slide3, alt: 'portfolio slide img3'},
      {src: slide4, alt: 'portfolio slide img4'},
      {src: slide5, alt: 'portfolio slide img5'},
    ],
    []
  );

  return (
    <MainSection>
      <TextContainer>
        <BigText>Portfolio</BigText>
        <SmallContainer>
          <SmallText1>Brand Fit - Brand Fly</SmallText1>
          <SmallText2>'Brand Fit'을 넘어 'Brand Fly'라는 날개를 달아드립니다</SmallText2>
        </SmallContainer>
      </TextContainer>
      <SlideContainer
        spaceBetween={25}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true}}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImg src={slide.src} alt={slide.alt} />
          </Slide>
        ))}
      </SlideContainer>
    </MainSection>
  );
}

export default memo(PortfolioMain);

const MainSection = styled.section`
  text-align: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12vw;
  align-items: end;
  margin: 5vw 0 3vw 0;
`;

const BigText = styled.h2`
  color: #1f1f1f;
  font-family: 'Satoshi', sans-serif;
  font-size: 7vw;
  margin: 0;
`;

const SmallContainer = styled.div`
  text-align: left;
`;

const SmallText1 = styled.p`
  color: #111;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 1.1vw;
  margin: 0;
`;

const SmallText2 = styled.p`
  color: #111;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 1vw;
  margin: 0.6vw 0 1vw 0;
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
