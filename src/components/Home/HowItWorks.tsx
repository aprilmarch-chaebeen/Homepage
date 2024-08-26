import styled from 'styled-components';
import biglogosrc from '../../assets/svg/big_logo.svg';
import {motion} from 'framer-motion';

const transition = {
  ease: 'easeInOut',
  duration: 5,
  y: {duration: 0.5},
};

function HowItWorks() {
  return (
    <WorkSection>
      <MediumText>진행과정</MediumText>
      <BigText>
        How it
        <br />
        Works
      </BigText>
      <MediumText>
        에이프릴마치는
        <br />
        브랜드 컨설팅부터 디자인까지 생각합니다
      </MediumText>
      <Steps>
        <StepContainer $top={70} $left={0}>
          <motion.div
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.3}}
          >
            <Step>Step 1</Step>
            <Line $border={0.1} $width={24} $margin_top={0.5} />
            <StepTitle>마케팅 상담 진단</StepTitle>
            <StepDescript>
              보완 요청 시 신속하고 꼼꼼한 대응
              <br />
              보완 요청 시 신속하고 꼼꼼한 대응
            </StepDescript>
          </motion.div>
        </StepContainer>
        <StepContainer $top={50} $left={30}>
          <motion.div
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.6}}
          >
            <Step>Step 2</Step>
            <Line $border={0.1} $width={24} $margin_top={0.5} />
            <StepTitle>마케팅 상담 진단</StepTitle>
            <StepDescript>
              보완 요청 시 신속하고 꼼꼼한 대응
              <br />
              보완 요청 시 신속하고 꼼꼼한 대응
            </StepDescript>
          </motion.div>
        </StepContainer>
        <StepContainer $top={-10} $left={60}>
          <motion.div
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.9}}
          >
            <Step>Step 3</Step>
            <Line $border={1.1} $width={45} $margin_top={0.7} />
            <Line $border={0.6} $width={45} $margin_top={1.5} />
            <Line $border={0.3} $width={45} $margin_top={2} />
            <Line $border={0.2} $width={45} $margin_top={2.4} />
            <Line $border={0.1} $width={45} $margin_top={3} $margin_btm={1} />
            <StepTitle>디자인 작업</StepTitle>
            <StepDescript>
              보완 요청 시 신속하고 꼼꼼한 대응
              <br />
              보완 요청 시 신속하고 꼼꼼한 대응
            </StepDescript>
          </motion.div>
        </StepContainer>
      </Steps>
      <BigLogo src={biglogosrc} alt="big logo" />
    </WorkSection>
  );
}

export default HowItWorks;

const WorkSection = styled.section`
  background-color: #050505;
  padding: 8vw 7vw;
  text-align: left;
  margin-top: 10rem;
  color: #fff;
  padding-bottom: 0;
  width: 100vw;
  height: 59.5vw;
  position: relative;
`;

const MediumText = styled.p`
  font-size: 1.2vw;

  font-family: 'Pretendard-Regular';
  margin: 0;
  line-height: 1.6;
`;

const BigText = styled.h2`
  font-family: 'Gotham';
  margin-top: 0.7rem;
  margin-bottom: 2rem;
  line-height: 1.1;
  font-size: 4vw;
`;

const Steps = styled.div`
  position: relative;
  height: 20vw;
`;

const StepContainer = styled.div<{$top: number; $left: number}>`
  position: absolute;
  top: ${(p) => p.$top}%;
  left: ${(p) => p.$left}%;
`;

const Step = styled.p`
  font-size: 2vw;
  font-family: 'Gotham-light';
  margin: 0;
`;

const Line = styled.hr<{$border: number; $width: number; $margin_top: number; $margin_btm?: number}>`
  border: 0;
  height: 0;
  border-top: ${(p) => p.$border}vw solid;
  width: ${(p) => p.$width}vw;
  margin-top: ${(p) => p.$margin_top}vw;
  margin-bottom: ${(p) => p.$margin_btm}vw;
`;

const StepTitle = styled.h3`
  font-family: 'GmarketSansMedium';
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.7vw;
`;

const StepDescript = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 1vw;
  line-height: 1.9;
`;

const BigLogo = styled.img`
  height: 12vw;
  position: absolute;
  top: 56vw;
  left: 70vw;
`;
