import {Swiper, SwiperSlide} from 'swiper/react';
import styled, {css} from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward_w.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useState} from 'react';
import WhatWeDoFilter from './WhatWeDoFilter';

function WhatWeDo() {
  const [nowIndex, setNowIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setNowIndex(swiper.realIndex + 1);
  };

  return (
    <section>
      <BigText>What we do</BigText>
      <SmallText>가나다라마바사가나다라마바사</SmallText>
      <SmallText>가나다라마바사아자차카타파하</SmallText>
      <WhatWeDoFilter />
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
        {Array.from({length: 30}, (_, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg src={`/img/img${i + 1}.webp`} alt="" />
          </Slide>
        ))}
      </SlideContainer>
      <PageNumberContainer>
        <PageNumber>{nowIndex}</PageNumber>
        <PageNumber>30</PageNumber>
      </PageNumberContainer>
      <ViewMore>
        <ViewText>View More</ViewText>
        <Arrow src={arrowsrc} alt="Arrow" />
      </ViewMore>
    </section>
  );
}

export default WhatWeDo;

const BigText = styled.h1`
  margin-top: 20rem;
  font-family: 'Gotham';
  font-size: 3.5vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1.4vw;
  margin: 0;
  color: #555;
`;

const SlideContainer = styled(Swiper)`
  width: 97vw;
  & .swiper-wrapper {
    margin-bottom: 3rem;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 90%;
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
    top: 88.7%;
    width: 50vw;
    left: 49.5%;
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
  height: 20vw;
  position: relative;
  ${(p) =>
    p.$idx === p.$nowIdx &&
    css`
      &:hover {
        transform: scaleX(1.5) !important;
        transition: transform 0.5s 0.5s !important;
      }
    `}
`;

const SlideImg = styled.img`
  width: 20vw;
  height: 20vw;
`;

const PageNumberContainer = styled.div`
  width: 55vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50.1%;
  transform: translate(-50%, 0);
  font-size: 1.1vw;
`;

const PageNumber = styled.span``;

const ViewMore = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 3rem;
  margin-bottom: 7rem;
  cursor: pointer;
`;

const ViewText = styled.span``;

const Arrow = styled.img`
  width: 1vw;
`;
