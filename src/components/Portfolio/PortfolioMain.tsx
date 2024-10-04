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
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        // autoplay={{delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true}}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1024: {
            spaceBetween: 25,
          },
          480: {
            spaceBetween: 15,
          },
        }}
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

  @media (max-width: 480px) {
    text-align: left;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12vw;
  align-items: end;
  margin: 5vw 0 3vw 0;

  @media (max-width: 1024px) {
    margin: 15vw 0 5vw 0;
    padding: 0 2vw;
  }

  @media (max-width: 480px) {
    display: block;
    padding: 0 5vw;
    margin: 18vw 0 3vw 0;
  }
`;

const BigText = styled.h2`
  color: #1f1f1f;
  font-family: 'Satoshi', sans-serif;
  font-size: 7vw;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 9vw;
  }

  @media (max-width: 480px) {
    font-size: 15vw;
  }
`;

const SmallContainer = styled.div`
  text-align: left;
`;

const SmallText1 = styled.p`
  color: #111;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 1.1vw;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.9vw;
  }

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const SmallText2 = styled.p`
  color: #111;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 1vw;
  margin: 0.6vw 0 1vw 0;

  @media (max-width: 1024px) {
    font-size: 1.7vw;
  }

  @media (max-width: 480px) {
    margin: 1.5vw 0 8vw 0;
    font-size: 3.3vw;
    width: 45vw;
  }
`;

const SlideContainer = styled(Swiper)`
  & .swiper-wrapper {
    margin-bottom: 3vw;
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

  @media (max-width: 1024px) {
    & .swiper-wrapper {
      margin-bottom: 5vw;
    }
    & .swiper-pagination-bullet-active {
      width: 1.8vw !important;
      height: 0.8vw !important;
    }
    & .swiper-pagination-bullet {
      width: 0.8vw;
      height: 0.8vw;
    }
  }

  @media (max-width: 480px) {
    & .swiper-wrapper {
      margin-bottom: 8vw;
    }
    & .swiper-pagination-bullet-active {
      width: 4vw !important;
      height: 1.3vw !important;
    }
    & .swiper-pagination-bullet {
      width: 1.3vw;
      height: 1.3vw;
    }
  }
`;

const Slide = styled(SwiperSlide)`
  width: 50vw;
  height: 27.144vw;

  @media (max-width: 1024px) {
    width: 65vw;
    height: 35.288vw;
  }

  @media (max-width: 480px) {
    width: 73vw;
    height: 39.631vw;
  }
`;

const SlideImg = styled.img.attrs({
  loading: 'lazy',
})`
  width: 50vw;
  height: 27.144vw;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 65vw;
    height: 35.288vw;
  }

  @media (max-width: 480px) {
    width: 73vw;
    height: 39.631vw;
  }
`;
