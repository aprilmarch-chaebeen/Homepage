import styled from 'styled-components';
import cursorsrc from '../../assets/svg/cursor_img.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import moresrc from '../../assets/svg/read_more.svg';
import {useMemo} from 'react';
import 'swiper/css';
import React from 'react';

interface FieldDescriptProps {
  descript: Array<string | JSX.Element>;
  name: string;
  num: number;
  pad?: number;
}

function FieldDescript({descript, name, num, pad}: FieldDescriptProps) {
  // useMemo로 슬라이드 데이터 캐싱
  const slides = useMemo(
    () =>
      Array.from({length: num}, (_, i) => ({
        src: require(`../../assets/images/field/${name}/${name}${i}.jpg`).default,
        alt: `img ${i + 1}`,
      })),
    [name, num]
  );

  return (
    <Container>
      <SmallText>{descript[0]}</SmallText>
      <BigText $pad={pad}>{descript[1]}</BigText>
      <TextContainer>
        <MediumText>{descript[2]}</MediumText>
        <MediumText>{descript[3]}</MediumText>
      </TextContainer>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Img src={slide.src} alt={slide.alt} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      <ReadMoreBtn>
        <ReadMore src={moresrc} alt="read more button" loading="lazy" />
      </ReadMoreBtn>
    </Container>
  );
}

export default React.memo(FieldDescript); // React.memo로 컴포넌트 메모이제이션

const Container = styled.div`
  text-align: center;
  padding: 3vw;

  @media (max-width: 480px) {
    padding: 4vw;
  }
`;

const SmallText = styled.p`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 0.9vw;
  color: #777;

  @media (max-width: 1280px) {
    font-size: 1.2vw;
  }

  @media (max-width: 480px) {
    font-size: 3.2vw;
  }
`;

const BigText = styled.h3<{$pad?: number}>`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 2vw;
  color: #222;
  padding: 0 ${(p) => p.$pad || 0}vw;

  @media (max-width: 1280px) {
    font-size: 2.7vw;
  }

  @media (max-width: 480px) {
    font-size: 5.5vw;
  }
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 1vw;
  color: #444;
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 1.3vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const TextContainer = styled.div`
  line-height: 1.6;
  margin-bottom: 2.5vw;

  @media (max-width: 480px) {
    margin-bottom: 6.5vw;
  }
`;

const Img = styled.img`
  border-radius: 1vw;
  width: 42vw;
  box-sizing: border-box;
  cursor: url(${cursorsrc}), pointer;

  @media (max-width: 1280px) {
    width: 44vw;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`;

const ReadMoreBtn = styled.button`
  display: none;

  @media (max-width: 480px) {
    display: block;
    border: none;
    background-color: transparent;
    margin: 4vw 25vw;
  }
`;

const ReadMore = styled.img`
  width: 36vw;
`;
