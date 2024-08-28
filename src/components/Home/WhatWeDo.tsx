import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward_w.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useState} from 'react';
import WhatWeDoFilter from './WhatWeDoFilter';

import img1src from '../../assets/svg/img1.svg';
import img2src from '../../assets/svg/img2.svg';
import img3src from '../../assets/svg/img3.svg';
import img4src from '../../assets/svg/img4.svg';
import img5src from '../../assets/svg/img5.svg';
import img6src from '../../assets/svg/img6.svg';
import img7src from '../../assets/svg/img7.svg';
import img8src from '../../assets/svg/img8.svg';
import img9src from '../../assets/svg/img9.svg';
import img10src from '../../assets/svg/img10.svg';
import img11src from '../../assets/svg/img11.svg';
import img12src from '../../assets/svg/img12.svg';
import img13src from '../../assets/svg/img13.svg';
import img14src from '../../assets/svg/img14.svg';
import img15src from '../../assets/svg/img15.svg';
import img16src from '../../assets/svg/img16.svg';
import img17src from '../../assets/svg/img17.svg';
import img18src from '../../assets/svg/img18.svg';
import img19src from '../../assets/svg/img19.svg';
import img20src from '../../assets/svg/img20.svg';
import img21src from '../../assets/svg/img21.svg';
import img22src from '../../assets/svg/img22.svg';
import img23src from '../../assets/svg/img23.svg';
import img24src from '../../assets/svg/img24.svg';
import img25src from '../../assets/svg/img25.svg';
import img26src from '../../assets/svg/img26.svg';
import img27src from '../../assets/svg/img27.svg';
import img28src from '../../assets/svg/img28.svg';
import img29src from '../../assets/svg/img29.svg';
import img30src from '../../assets/svg/img30.svg';
import img31src from '../../assets/svg/img31.svg';
import img32src from '../../assets/svg/img32.svg';
import img33src from '../../assets/svg/img33.svg';
import img34src from '../../assets/svg/img34.svg';
import img35src from '../../assets/svg/img35.svg';

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
        <Slide>
          <SlideImg src={img1src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img2src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img3src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img4src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img5src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img6src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img7src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img8src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img9src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img10src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img11src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img12src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img13src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img14src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img15src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img16src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img17src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img18src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img19src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img20src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img21src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img22src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img23src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img24src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img25src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img26src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img27src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img28src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img29src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img30src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img31src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img32src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img33src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img34src} alt="img1" />
        </Slide>
        <Slide>
          <SlideImg src={img35src} alt="img1" />
        </Slide>
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

const Slide = styled(SwiperSlide)`
  width: 20vw;
  height: 22vw;
  position: relative;
`;

const SlideImg = styled.img`
  height: 20vw;
  width: 20vw;
  object-fit: cover;
  &:hover {
    width: 31vw;
    transition: width 0.5s ease-in-out;
  }
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
