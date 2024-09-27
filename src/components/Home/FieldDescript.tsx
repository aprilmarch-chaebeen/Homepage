import styled from 'styled-components';
import cursorsrc from '../../assets/svg/cursor_img.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';

interface FieldDescriptProps {
  descript: Array<string | JSX.Element>;
  name: string;
  num: number;
  pad?: number;
}

function FieldDescript({descript, name, num, pad}: FieldDescriptProps) {
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
        {Array.from({length: num}, (_, i) => (
          <SwiperSlide key={i}>
            <Img src={require(`../../assets/images/field/${name}/${name}${i}.svg`).default} alt={`img ${i + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default FieldDescript;

const Container = styled.div`
  text-align: center;
  padding: 3vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-SemiBold';
  font-size: 0.9vw;
  color: #777;
`;

const BigText = styled.h3<{$pad?: number}>`
  font-family: 'Pretendard-Light';
  font-size: 2vw;
  color: #222;
  padding: 0 ${(p) => p.$pad || 0}vw;
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1vw;
  color: #444;
  margin: 0;
`;

const TextContainer = styled.div`
  line-height: 1.6;
  margin-bottom: 2.5vw;
`;

const Img = styled.img`
  border-radius: 1vw;
  width: 42vw;
  box-sizing: border-box;
  cursor: url(${cursorsrc}), pointer;
`;
