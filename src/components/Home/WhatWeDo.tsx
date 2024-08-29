import {Swiper, SwiperSlide} from 'swiper/react';
import styled, {css} from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward_w.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useState} from 'react';
import WhatWeDoFilter from './WhatWeDoFilter';

// const env = process.env;
// env.PUBLIC_URL = env.PUBLIC_URL || '';

function WhatWeDo() {
  const [nowIndex, setNowIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setNowIndex(swiper.realIndex + 1);
  };

  return (
    <WhatWeDoSec>
      <BigText>What we do</BigText>
      <SmallText>디자인과 브랜딩을 향한 우리의 전문성과 열정, 진심의 영향력은 든든한 믿음과 새로운 기쁨을 전달합니다.</SmallText>
      <WhatWeDoFilter />
      <SlideCover></SlideCover>
      <PageNumberContainer>
        <PageNumber>{nowIndex}</PageNumber>
        <PageNumber>30</PageNumber>
      </PageNumberContainer>
      <SlideContainer
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 70,
          depth: 250,
          modifier: 0.8,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {Array.from({length: 35}, (_, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg src={`/images/img${i + 1}.svg`} alt={`img ${i + 1}`} $idx={i} $nowIdx={nowIndex - 1} />
          </Slide>
        ))}
      </SlideContainer>
      <ViewMore>
        <ViewText>View More</ViewText>
        <Arrow src={arrowsrc} alt="Arrow" />
      </ViewMore>
    </WhatWeDoSec>
  );
}

export default WhatWeDo;

const WhatWeDoSec = styled.section`
  position: relative;
`;

const BigText = styled.h3`
  margin-top: 22vw;
  margin-bottom: 2vw;
  font-family: 'Gotham';
  font-size: 2.8vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1vw;
  margin: 0;
  color: #555;
`;
const SlideCover = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 4.6vw;
  position: absolute;
  z-index: 10;
  margin-top: 17.5vw;
`;

const PageNumberContainer = styled.div`
  width: 54.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 0.9vw;
  top: 72.5%;
  z-index: 12;

  @media (max-width: 1024px) {
    top: 73.2%;
  }
  @media (max-width: 600px) {
    top: 73.5%;
  }
  @media (max-width: 450px) {
    top: 73.3%;
  }
  @media (max-width: 380px) {
    top: 73%;
  }
  @media (max-width: 360px) {
    top: 73.4%;
  }
`;

const SlideContainer = styled(Swiper)`
  width: 97vw;
  height: 25vw;
  & .swiper-wrapper {
    margin-bottom: 3rem;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 23.4vw;
  }

  & .swiper-button-prev::after {
    font-size: 1vw !important;
    color: #000;
    position: absolute;
    left: 18vw;
  }

  & .swiper-button-next::after {
    font-size: 1vw !important;
    color: #000 !important;
    position: absolute;
    right: 18vw;
  }

  & .swiper-pagination-progressbar {
    top: 23vw;
    width: 50vw;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #ccc;
    height: 0.2vw;
  }

  & .swiper-pagination-progressbar-fill {
    background: #000;
    height: 0.2vw;
  }
`;

const Slide = styled(SwiperSlide)<{$idx: number; $nowIdx: number}>`
  width: 20vw;
  height: 22vw;
  position: relative;
  ${(p) =>
    p.$idx === p.$nowIdx &&
    css`
      &:hover {
        width: 31vw !important;
        transition: width 0.5s ease-in-out !important;
      }
    `}
`;

const SlideImg = styled.img<{$idx: number; $nowIdx: number}>`
  height: 20vw;
  width: 20vw;
  object-fit: cover;
  ${(p) =>
    p.$idx === p.$nowIdx &&
    css`
      &:hover {
        width: 31vw !important;
        transition: width 0.5s ease-in-out !important;
      }
    `}
`;

const PageNumber = styled.span``;

const ViewMore = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 0.7vw 1.5vw;
  border-radius: 8px;
  margin-top: 3vw;
  margin-bottom: 7vw;
  cursor: pointer;
  font-size: 1vw;
`;

const ViewText = styled.span``;

const Arrow = styled.img`
  width: 1vw;
`;
