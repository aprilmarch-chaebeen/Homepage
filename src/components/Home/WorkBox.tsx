import styled from 'styled-components';
import {SwiperSlide} from 'swiper/react';
import 'swiper/css';
interface WorkBoxProps {
  text: string[];
  idx: number;
}

function WorkBox({text, idx}: WorkBoxProps) {
  return (
    <Container>
      <ImgBox $idx={idx}>
        <ImgText>에이프릴마치는</ImgText>
        <ImgText>당신의</ImgText>
        <ImgText>
          <span style={{marginRight: '16vw'}}>[</span>
          <span>]</span>
        </ImgText>
        <ImgText>입니다</ImgText>
      </ImgBox>
      <TextBox>
        <Title>How It Works</Title>
        <SubTitle>
          {text[0]}
          <br />
          {text[1]}
        </SubTitle>
        <Divider />
        <Descript>
          {text[2]}
          <br />
          {text[3]}
        </Descript>
      </TextBox>
    </Container>
  );
}

export default WorkBox;

const Container = styled(SwiperSlide)`
  display: flex;
  height: 100%;
  align-items: center;
`;

const ImgBox = styled.div<{$idx: number}>`
  background-image: url(${(props) => require(`../../assets/images/howitworks/work${props.$idx}.svg`).default});
  background-size: cover;
  background-position: center;
  width: 28vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Bold';
  font-size: 3vw;
  color: #fff;
`;

const ImgText = styled.p`
  margin: 0;
`;

const TextBox = styled.div`
  width: 72vw;
  background-color: #000;
  height: 25vw;
  text-align: left;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 300;
  color: #d2ff52;
  font-size: 1vw;
  margin-left: 5vw;
  margin-top: 3vw;
`;

const SubTitle = styled.h3`
  font-family: 'Pretendard-SemiBold';
  color: #fff;
  font-size: 1.7vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  line-height: 1.7;
  margin-left: 5vw;
`;

const Divider = styled.div`
  border-left: 0.1vw solid #fff;
  height: 4vw;
  margin-left: 5vw;
`;

const Descript = styled.p`
  font-family: 'Pretendard-ExtraLight';
  color: #eee;
  font-size: 1.5vw;
  line-height: 1.5;
  margin-left: 5vw;
  margin-top: 1vw;
`;
