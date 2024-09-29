import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation} from 'swiper/modules';
import {memo, useEffect, useState} from 'react';
import leftsrc from '../../assets/svg/swiper_left.svg';
import rightsrc from '../../assets/svg/swiper_right.svg';

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
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setAutoplayEnabled(false);
      } else {
        setAutoplayEnabled(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WorkSection>
      <SlideContainer
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: '.prev_button',
          nextEl: '.next_button'
        }}
        autoplay={
          autoplayEnabled
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[Autoplay, Navigation]}
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
        <LeftBtn className='prev_button'>
          <BtnImg src={leftsrc} alt="swiper button left" />
        </LeftBtn>
        <RightBtn className='next_button'>
          <BtnImg src={rightsrc} alt="swiper button left" />
        </RightBtn>
      </SlideContainer>
    </WorkSection>
  );
}

export default HowItWorks;

const MemoizedWorkBox = memo(WorkBox);

const WorkSection = styled.section`
  margin-top: 20vw;
  overflow: hidden;

  @media (max-width: 480px) {
    margin-top: 30vw;
    position: relative;
  }
`;

const SlideContainer = styled(Swiper)`
  @media (max-width: 480px) {
    & .swiper-wrapper {
      width: 100vw;
    }
  }
`

const LeftBtn = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 94vw;
    left: 4vw;
    z-index: 10;
  }
`

const RightBtn = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 94vw;
    right: 4vw;
    z-index: 10;
  }
`

const BtnImg = styled.img`
  width: 8vw;
`

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
          <SignLeft>[</SignLeft>
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

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
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

  @media (max-width: 480px) {
    width: 100vw;
    height: 90vw;
    font-size: 10vw;
  }
`;

const ImgText = styled.p`
  margin: 0;
`;

const SignLeft = styled.span`
  margin-right: 16vw;

  @media (max-width: 480px) {
    margin-right: 52vw;
  }
`

const TextBox = styled.div`
  width: 72vw;
  background-color: #000;
  height: 25vw;
  text-align: left;

  @media (max-width: 480px) {
    width: 100vw;
    height: 115vw;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 300;
  color: #d2ff52;
  font-size: 1vw;
  margin-left: 5vw;
  margin-top: 3vw;

  @media (max-width: 480px) {
    font-size: 4.5vw;
    margin: 17vw auto 5vw auto;
  }
`;

const SubTitle = styled.h3`
  font-family: 'Pretendard-SemiBold';
  color: #fff;
  font-size: 1.7vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  line-height: 1.7;
  margin-left: 5vw;

  @media (max-width: 480px) {
    margin: auto;
    font-size: 5vw;
  }
`;

const Divider = styled.div`
  border-left: 0.1vw solid #fff;
  height: 4vw;
  margin-left: 5vw;

  @media (max-width: 480px) {
    height: 13vw;
    margin-left: 50vw;
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
`;

const Descript = styled.p`
  font-family: 'Pretendard-ExtraLight';
  color: #eee;
  font-size: 1.5vw;
  line-height: 1.5;
  margin-left: 5vw;
  margin-top: 1vw;

  @media (max-width: 480px) {
    font-size: 5vw;
    margin: 0 10vw;
  }
`;
