import styled from 'styled-components';
import biglogosrc from '../../assets/svg/big_logo.svg';
import {motion} from 'framer-motion';

const transition = {
  ease: 'easeInOut',
  duration: 5,
  y: {duration: 1},
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
        디자인, 브랜딩, 마케팅 캠페인에 이르는 Full Service Creative를 창출하여 고객사를 지원합니다.
      </MediumText>
      <Steps>
        <StepContainer $top={70} $left={0}>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.3}}
          >
            <Step>
              01
              <br />
              Brand Concepting
            </Step>
            <Line $border={0.1} $width={24} $margin_top={0.5} $margin_btm={0.6} />
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.4}}
          >
            <StepTitle>브랜드스러움에 대한 고민</StepTitle>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.5}}
          >
            <StepDescript>
              Brand Strategy
              <br />
              Customer Experience
              <br />
              Brand slogan & Visual Identity
              <br />
              Space Concept
            </StepDescript>
          </motion.div>
        </StepContainer>
        <StepContainer $top={50} $left={28}>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.65}}
          >
            <Step>
              02
              <br />
              Brand Experience Design
            </Step>
            <Line $border={0.1} $width={29} $margin_top={0.6} $margin_btm={0.6} />
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.75}}
          >
            <StepTitle>브랜드 경험에 대한 A부터 Z까지</StepTitle>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 0.85}}
          >
            <StepDescript>
              Brand Experience Design
              <br />
              Space Design & Experience
              <br />
              Motion & Sensory Identity
              <br />
              Brand Behavior System
            </StepDescript>
          </motion.div>
        </StepContainer>
        <StepContainer $top={-10} $left={60}>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 1}}
          >
            <Step>
              03
              <br />
              Creative & Activation
            </Step>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 1.1}}
          >
            <Line $border={1.1} $width={45} $margin_top={0.7} $margin_btm={0} />
            <Line $border={0.6} $width={45} $margin_top={1.5} $margin_btm={0} />
            <Line $border={0.3} $width={45} $margin_top={2} $margin_btm={0} />
            <Line $border={0.2} $width={45} $margin_top={2.4} $margin_btm={0} />
            <Line $border={0.1} $width={45} $margin_top={3} $margin_btm={1} />
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 1.2}}
          >
            <StepTitle>전략적 마케팅에 대한 제안과 리딩</StepTitle>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 80}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{transition, delay: 1.3}}
          >
            <StepDescript>
              Brand Communication
              <br />
              Branded Contents
              <br />
              Digital Marketing
              <br />
              Advertising
              <br />
              Training & Education
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
  margin-top: 10vw;
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
  margin-top: 0.7vw;
  margin-bottom: 2vw;
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
  font-size: 1.5vw;
  font-family: 'Gotham-light';
  margin: 0;
  line-height: 1.1;
`;

const Line = styled.hr<{$border: number; $width?: number; $margin_top: number; $margin_btm: number}>`
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
  font-size: 2vw;
`;

const StepDescript = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 1vw;
  line-height: 1.9;
`;

const BigLogo = styled.img`
  height: 12vw;
  position: absolute;
  top: 57.5vw;
  left: 65.5vw;
`;
