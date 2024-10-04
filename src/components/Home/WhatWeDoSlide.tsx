import styled, {css} from 'styled-components';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useCallback, useState, useMemo} from 'react';
import {useAppSelector} from '../../hook/reduxHook';
import {selectHomeFilterValue} from '../../reducers/homeFilterSlice';

function WhatWeDoSlide() {
  const home = useAppSelector(selectHomeFilterValue);
  const [nowIndex, setNowIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setNowIndex(swiper.realIndex + 1);
  }, []);

  const slides = useMemo(
    () =>
      Array.from({length: home.num}, (_, i) => ({
        src: require(`../../assets/images/whatwedo/${home.filter}/${home.filter}${i}.svg`).default,
        alt: `img ${i + 1}`,
      })),
    [home.filter, home.num]
  );

  return (
    <div>
      <PageNumberContainer>
        <PageNumber>{nowIndex < 10 ? `0${nowIndex}` : nowIndex}</PageNumber>
        <PageGrayNumber>{home.num < 10 ? `0${home.num}` : home.num}</PageGrayNumber>
      </PageNumberContainer>

      <SlideContainer
        slidesPerView="auto"
        centeredSlides
        loop
        autoplay={{delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true}}
        pagination={{type: 'progressbar', clickable: true}}
        navigation
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        coverflowEffect={{rotate: 0, stretch: 0, depth: 160, modifier: 1.5, slideShadows: false}}
        onSlideChange={handleSlideChange}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg src={slide.src} alt={slide.alt} $idx={i} $nowIdx={nowIndex - 1} loading="lazy" />
          </Slide>
        ))}
        <SlideCover />
      </SlideContainer>

      <CarouselLeft src={require('../../assets/images/carousel_left.png').default} alt="carousel left" />
      <CarouselRight src={require('../../assets/images/carousel_right.png').default} alt="carousel right" />
      <GradientRight />
      <GradientLeft />
    </div>
  );
}

export default WhatWeDoSlide;

// Styled Components
const SlideCover = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 5vw;
  position: absolute;
  z-index: 10;
  top: 62.5%;

  @media (max-width: 480px) {
    top: 58%;
  }
`;

const PageNumberContainer = styled.div`
  width: 42.4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 1vw;
  top: 85.9%;
  z-index: 12;

  @media (max-width: 480px) {
    font-size: 3vw;
    width: 69vw;
    top: 83.5%;
    left: 51%;
  }
`;

const SlideContainer = styled(Swiper)`
  width: 48vw;
  height: 33vw;
  position: relative;
  margin-right: 26.5vw;

  & .swiper-wrapper {
    margin-bottom: 3rem;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 24.3vw;
    z-index: 12;
  }

  & .swiper-button-prev::after,
  & .swiper-button-next::after {
    font-size: 0.8vw !important;
    color: #000;
  }

  & .swiper-pagination-progressbar {
    top: 24vw !important;
    width: 38vw !important;
    height: 0.2vw !important;
    left: 50% !important;
    transform: translate(-50%, 50%);
    background: #ccc;
    z-index: 13;
  }

  & .swiper-pagination-progressbar-fill {
    background: #000 !important;
    height: 0.2vw !important;
  }

  & .swiper-slide-shadow-right,
  .swiper-slide-shadow-left {
    background-image: none;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 81vw;
    margin: 0;

    & .swiper-pagination-progressbar {
      top: 66%;
      width: 55vw;
      height: 0.55vw;
      left: 48.5%;
    }

    & .swiper-pagination-progressbar-fill {
      height: 0.55vw;
    }

    & .swiper-button-prev {
      top: 53.9vw;
      left: 8.5vw;
    }
    & .swiper-button-next {
      top: 53.9vw;
      right: 11vw;
    }

    & .swiper-button-prev::after,
    & .swiper-button-next::after {
      font-size: 2vw !important;
    }
  }
`;

const Slide = styled(SwiperSlide)<{$idx: number; $nowIdx: number}>`
  width: 20vw;
  height: 25vw;
  position: relative;

  ${(p) =>
    p.$idx === p.$nowIdx &&
    css`
      transform: scale(1.05);
      transition: transform 0.5s ease-in-out;
    `}

  @media (max-width: 480px) {
    width: 50vw;
    height: 55vw;
  }
`;

const SlideImg = styled.img<{$idx: number; $nowIdx: number}>`
  height: 22vw;
  width: 20vw;
  object-fit: contain;
  border-radius: 10px;

  ${(p) =>
    p.$idx === p.$nowIdx &&
    css`
      object-fit: contain;
      transform: scale(1.05);
      transition: transform 0.5s ease-in-out;
    `}

  @media (max-width: 480px) {
    width: 50vw;
    height: 50vw;
  }
`;

const GradientRight = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 55%;
  right: 0;
  z-index: 11;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);

  @media (max-width: 480px) {
    width: 17vw;
    height: 50vw;
  }
`;

const GradientLeft = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 55%;
  left: 0;
  z-index: 11;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);

  @media (max-width: 480px) {
    width: 17vw;
    height: 50vw;
  }
`;

const PageNumber = styled.span``;

const PageGrayNumber = styled.span`
  color: #444;
`;

const CarouselRight = styled.img`
  width: 31vw;
  position: absolute;
  height: 19.3vw;
  top: 39.25vw;
  right: -4.65vw;
  z-index: 10;

  @media (max-width: 480px) {
    display: none;
  }
`;

const CarouselLeft = styled.img`
  width: 31vw;
  position: absolute;
  height: 19.3vw;
  top: 39.25vw;
  left: -1.33vw;
  z-index: 10;

  @media (max-width: 480px) {
    display: none;
  }
`;
