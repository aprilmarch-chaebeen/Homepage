import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

function PortfolioMain() {
  return (
    <MainSection>
      <SmallText>portfolio</SmallText>
      <BigText>
        <Highlight>창의적인 디자인</Highlight>과
        <br />
        <Highlight>경험</Highlight>을 <Highlight>만듭니다</Highlight>
      </BigText>
      <SlideContainer
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <Slide>slide1</Slide>
        <Slide>slide2</Slide>
        <Slide>slide3</Slide>
        <Slide>slide4</Slide>
      </SlideContainer>
    </MainSection>
  );
}

export default PortfolioMain;

const MainSection = styled.section`
  text-align: center;
`;

const SmallText = styled.p`
  color: #ff553e;
  font-size: 1.5vw;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-family: 'S-CoreDream-3Light';
`;

const BigText = styled.h1`
  color: #999;
  font-size: 3.5vw;
  margin-top: 1rem;
  margin-bottom: 6rem;
  font-family: 'NotoSans KR';
  font-weight: bold;
  line-height: 1.4;
`;

const Highlight = styled.span`
  color: #000;
`;

const SlideContainer = styled(Swiper)`
  & .swiper-wrapper {
    margin-bottom: 3rem;
  }
  & .swiper-pagination-bullet-active {
    width: 1.2vw !important;
    height: 0.5vw !important;
    background-color: #ff553e !important;
    border-radius: 6px !important;
  }
  & .swiper-pagination-bullet {
    width: 0.5vw;
    height: 0.5vw;
    background-color: #ddd;
  }
`;

const Slide = styled(SwiperSlide)`
  width: 50vw;
  height: 30vw;
  border: 1px solid;
`;
