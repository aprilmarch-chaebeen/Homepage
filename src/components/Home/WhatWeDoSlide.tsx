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
        slidesPerView={3}
        centeredSlides
        loop
        autoplay={{delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true}}
        pagination={{type: 'progressbar', clickable: true}}
        navigation
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        coverflowEffect={{rotate: 0, stretch: 0, depth: 160, modifier: 1.5}}
        onSlideChange={handleSlideChange}
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
`;

const PageNumberContainer = styled.div`
  width: 42.4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 49%;
  transform: translate(-50%, 50%);
  font-size: 1vw;
  top: 85.9%;
  z-index: 12;
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
    top: 24vw;
    width: 38vw;
    height: 0.2vw;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #ccc;
    z-index: 13;
  }

  & .swiper-pagination-progressbar-fill {
    background: #000;
    height: 0.2vw;
  }

  & .swiper-slide-shadow-right,
  .swiper-slide-shadow-left {
    background-image: none;
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
`;

const GradientRight = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 55%;
  right: 0;
  z-index: 11;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
`;

const GradientLeft = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 55%;
  left: 0;
  z-index: 11;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
`;

const PageNumber = styled.span``;

const PageGrayNumber = styled.span`
  color: #444;
`;

const CarouselRight = styled.img`
  width: 31vw;
  position: absolute;
  height: 19.3vw;
  top: 55.2%;
  right: -3.78vw;
  z-index: 10;
`;

const CarouselLeft = styled.img`
  width: 31vw;
  position: absolute;
  height: 19.3vw;
  top: 55.2%;
  left: -2.7vw;
  z-index: 10;
`;
