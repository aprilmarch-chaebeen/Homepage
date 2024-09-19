import styled, {css} from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useCallback, useState} from 'react';
import {useAppSelector} from '../../hook/reduxHook';
import {selectHomeFilterValue} from '../../reducers/homeFilterSlice';

function WhatWeDoSlide() {
  const home = useAppSelector(selectHomeFilterValue);
  const [nowIndex, setNowIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: any) => {
    setNowIndex(swiper.realIndex + 1);
  }, []);

  return (
    <div>
      <PageNumberContainer>
        <PageNumber>{nowIndex < 10 ? '0' + nowIndex : nowIndex}</PageNumber>
        <PageGrayNumber>{home.num < 10 ? '0' + home.num : home.num}</PageGrayNumber>
      </PageNumberContainer>
      <SlideContainer
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 1.5,
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {Array.from({length: home.num}, (_, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg
              src={require(`../../assets/images/${home.filter}/${home.filter}${i}.svg`).default}
              alt={`img ${i + 1}`}
              $idx={i}
              $nowIdx={nowIndex - 1}
              loading="lazy"
            />
          </Slide>
        ))}
        <SlideCover></SlideCover>
      </SlideContainer>
      <CarouselLeft src={require('../../assets/images/carousel_left.png').default} alt="carousel left" />
      <CarouselRight src={require('../../assets/images/carousel_right.png').default} alt="carousel right" />
      <GradientRight></GradientRight>
      <GradientLeft></GradientLeft>
    </div>
  );
}

export default WhatWeDoSlide;

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
  left: 50.3%;
  transform: translate(-50%, 50%);
  font-size: 1vw;
  top: 82.1%;
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

  & .swiper-button-prev::after {
    font-size: 0.8vw !important;
    color: #000;
    position: absolute;
    left: 2.4vw;
  }

  & .swiper-button-next::after {
    font-size: 0.8vw !important;
    color: #000 !important;
    position: absolute;
    right: 0vw;
  }

  & .swiper-pagination-progressbar {
    top: 24vw;
    width: 39vw;
    height: 0.2vw;
    left: 52.5%;
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
      /* &:hover {
        transform: scaleX(1.6) scaleY(1.65);
        transition: transform 0.5s ease-in-out !important;
      } */
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
      /* &:hover {
        transform: scaleX(1.6) scaleY(1.65);
        transition: transform 0.5s ease-in-out !important;
        object-fit: contain;
      } */
    `}
`;

const GradientRight = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 42%;
  right: 0;
  z-index: 11;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
`;

const GradientLeft = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 42%;
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
  top: 43.2%;
  right: -3.8%;
  z-index: 10;
`;

const CarouselLeft = styled.img`
  width: 31vw;
  position: absolute;
  height: 19.3vw;
  top: 43.2%;
  left: -2.44%;
  z-index: 10;
`;
