import {Swiper, SwiperSlide} from 'swiper/react';
import styled, {css} from 'styled-components';
import moresrc from '../../assets/svg/read_more.svg';

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
    <WhatWeDoSec>
      <BigText>What we do</BigText>
      <MediumText>
        고객사에 가장 최적화된 <br /> <BoldText>브랜딩을 제안합니다</BoldText>
      </MediumText>
      <SmallText>디자인과 브랜딩을 향한 우리의 전문성과 열정, 진심의 영향력은 든든한 믿음과 새로운 기쁨을 전달합니다.</SmallText>
      <WhatWeDoFilter />

      <PageNumberContainer>
        <PageNumber>{nowIndex < 10 ? '0' + nowIndex : nowIndex}</PageNumber>
        <PageNumberG>35</PageNumberG>
      </PageNumberContainer>
      <SlideContainer
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
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
          slideShadows: true,
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {Array.from({length: 35}, (_, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg src={require(`../../assets/images/img${i + 1}.svg`).default} alt={`img ${i + 1}`} $idx={i} $nowIdx={nowIndex - 1} />
          </Slide>
        ))}
        <SlideCover></SlideCover>
      </SlideContainer>
      <GradientRight></GradientRight>
      <GradientLeft></GradientLeft>
      <ReadMoreBtn>
        <ReadMore src={moresrc} alt="read more button" />
      </ReadMoreBtn>
    </WhatWeDoSec>
  );
}

export default WhatWeDo;

const WhatWeDoSec = styled.section`
  position: relative;
`;

const BigText = styled.p`
  margin-top: 15vw;
  margin-bottom: 2.1vw;
  font-family: 'Cardo';
  font-size: 1.2vw;
  color: #1c46f5;
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 2.1vw;
  margin: 0;
  margin-bottom: 2.5vw;
  line-height: 1.4;
`;

const BoldText = styled.span`
  font-family: 'Pretendard-SemiBold';
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 0.9vw;
  margin: 0;
  color: #555;
`;

const SlideCover = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 5vw;
  position: absolute;
  z-index: 10;
  top: 63%;
`;

const PageNumberContainer = styled.div`
  width: 42.4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50.8%;
  transform: translate(-50%, 50%);
  font-size: 1vw;
  top: 81.9%;
  z-index: 12;

  /* @media (max-width: 1024px) {
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
  } */
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
    left: 2.6vw;
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
  height: 25vw;
  width: 20vw;
  object-fit: cover;
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
  top: 40%;
  right: 0;
  z-index: 1;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
`;

const GradientLeft = styled.div`
  width: 15vw;
  position: absolute;
  height: 20vw;
  top: 40%;
  left: 0;
  z-index: 1;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
`;

const PageNumber = styled.span``;

const PageNumberG = styled.span`
  color: #888;
`;

const ReadMoreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 87%;
  transform: translate(-50%, 50%);
  z-index: 12;
`;

const ReadMore = styled.img`
  width: 11.2vw;
`;
