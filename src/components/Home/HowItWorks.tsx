import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import {memo} from 'react';

// 텍스트 배열 정의
const boxText1 = [
  '마케팅의 경쟁력, 브랜드의 지속성을',
  '모두 담을 수 있는 곳을 찾는다면?',
  '에이프릴마치는 마케팅에 직접적으로',
  '도움이 될 수 있는 디자인의 정확한 방향을 제시합니다',
];
const boxText2 = [
  '마케팅과 디자인,',
  '어디서부터 어떻게 해야할지 잘 모르겠다면?',
  '무엇이 필요한지 어떤것을 먼저 시작해야하는지부터',
  '함께 고민하는 에이프릴마치가 처음부터 끝까지 함께합니다',
];
const boxText3 = [
  '지금에 안주하지 않고',
  '우리의 브랜드가 더 높이 도약할 수 있도록',
  '에이프릴마치의 풍부한 경험과 노하우로',
  '고객의 브랜드가 더 높이 도약할 수 있도록 디딤돌이 되어드립니다.',
];

function HowItWorks() {
  return (
    <WorkSection>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <MemoizedWorkBox text={boxText1} imgsrc={require('../../assets/images/howitworks/work0.svg').default} />
        </SwiperSlide>
        <SwiperSlide>
          <MemoizedWorkBox text={boxText2} imgsrc={require('../../assets/images/howitworks/work1.svg').default} />
        </SwiperSlide>
        <SwiperSlide>
          <MemoizedWorkBox text={boxText3} imgsrc={require('../../assets/images/howitworks/work2.svg').default} />
        </SwiperSlide>
      </Swiper>
    </WorkSection>
  );
}

export default HowItWorks;

// 메모이제이션된 WorkBox 컴포넌트
const MemoizedWorkBox = memo(WorkBox);

// 스타일 정의
const WorkSection = styled.section`
  margin-top: 20vw;
  width: 100vw;
`;

// WorkBox 컴포넌트
interface WorkBoxProps {
  text: string[];
  imgsrc: string;
}

function WorkBox({text, imgsrc}: WorkBoxProps) {
  return (
    <Container>
      <ImgBox $imgsrc={imgsrc}>
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

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
`;

const ImgBox = styled.div<{$imgsrc: string}>`
  background-image: url(${(props) => props.$imgsrc});
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
