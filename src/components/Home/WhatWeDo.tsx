import {Swiper, SwiperSlide} from 'swiper/react';
import styled, {css} from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward_w.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules';
import {useState} from 'react';
import WhatWeDoFilter from './WhatWeDoFilter';

const imgsrc = [
  './img/img1.svg',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img2.svg?token=BKTX2MGHNTNIHVXA55EPUGDGZ2BR2',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img3.svg?token=BKTX2MG2FIOI7O2JPJEX4DTGZ2BTK',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img4.svg?token=BKTX2MCYQ3AP6GCRJCRP7STGZ2BUG',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img5.svg?token=BKTX2MGGITDHXFCJXCUHIE3GZ2BWS',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img6.svg?token=BKTX2MANMFJ5VHZKQKIL3N3GZ2BXS',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img7.svg?token=BKTX2MBTDUHZTXGK4X7R4ALGZ2BYO',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img8.svg?token=BKTX2MGGOJFUKGGS674B6XLGZ2BZG',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img9.svg?token=BKTX2MESGD25TB5SDWYN4TDGZ2B2E',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img10.svg?token=BKTX2MDIUAKP5MQD6A3QBILGZ2B3A',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img11.svg?token=BKTX2MERF4VUKV6WB4DARZDGZ2B46',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img12.svg?token=BKTX2MC57MIYAVFL6ELI5GDGZ2B5W',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img13.svg?token=BKTX2MEVYCR2X554C5UCN2LGZ2B6M',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img14.svg?token=BKTX2MBJCE4V6DPPISASNZLGZ2B7M',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img15.svg?token=BKTX2MCAGS37XN42HOUYJ3DGZ2CAI',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img16.svg?token=BKTX2MG5ZWF2LGKCRBX4LVLGZ2CA6',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img17.svg?token=BKTX2MC7MSPICAV23FXCDUDGZ2CB4',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img18.svg?token=BKTX2MFUOWPMSR7BHYGST73GZ2CC2',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img19.svg?token=BKTX2MF3PEYTJHRSYTWODNTGZ2CDS',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img20.svg?token=BKTX2MF4MQH4ERA7TQG4DMDGZ2CE6',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img21.svg?token=BKTX2MD65LNMETY7SA25Q4TGZ2CF6',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img22.svg?token=BKTX2MG7RX2GSOB5EAJPVS3GZ2CGW',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img23.svg?token=BKTX2MCC6D3OKGUUIAPLANLGZ2CHQ',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img24.svg?token=BKTX2MEYNBEIZMJZR2TI5MDGZ2CII',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img25.svg?token=BKTX2MCM56HUIYCGLTKQ2LTGZ2CJC',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img26.svg?token=BKTX2MHVTXEMDEGDSF63N5LGZ2CJY',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img27.svg?token=BKTX2MDQND5JTNX4VKMMKGLGZ2CKQ',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img28.svg?token=BKTX2MCUPQIMFHSDIXPRNO3GZ2CLI',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img29.svg?token=BKTX2MGY4SUEGTHQTRCUZQTGZ2CMI',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img30.svg?token=BKTX2MHNIZVWY4MC2SZCHODGZ2CNI',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img31.svg?token=BKTX2MEAPVOMMWV5L7WN3NLGZ2COG',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img32.svg?token=BKTX2MBNSTHRSSBY3UK75N3GZ2CO4',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img33.svg?token=BKTX2MDJYFPNTMKSEMRE5FDGZ2CP6',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img34.svg?token=BKTX2MGVHWNSCZVAPVXWCT3GZ2CQW',
  'https://raw.githubusercontent.com/aprilmarch-chaebeen/Homepage/6f9aa05cf64df8ba017597e82c560a3583b4d8a3/public/img/img35.svg?token=BKTX2MBFIG7GB5G5ESRINODGZ2CRQ',
];

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
        {Array.from({length: imgsrc.length}, (_, i) => (
          <Slide key={i} $idx={i} $nowIdx={nowIndex - 1}>
            <SlideImg src={imgsrc[i]} alt={`img ${i}`} $idx={i} $nowIdx={nowIndex - 1} />
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
