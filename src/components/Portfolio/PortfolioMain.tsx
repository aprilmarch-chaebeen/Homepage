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
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <Slide>slide1</Slide>
        <Slide>slide2</Slide>
        <Slide>slide3</Slide>
        <Slide>slide4</Slide>
      </Swiper>
    </MainSection>
  );
}

export default PortfolioMain;

const MainSection = styled.section`
  text-align: center;
`;

const SmallText = styled.p`
  color: #ff553e;
  font-size: 28px;
`;

const BigText = styled.h1`
  color: #999;
  font-size: 70px;
  margin-top: 1rem;
  margin-bottom: 6rem;
`;

const Highlight = styled.span`
  color: #000;
`;

const Slide = styled(SwiperSlide)`
  width: 886px;
  height: 481px;
  border: 1px solid;
`;
