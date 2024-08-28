import styled, {keyframes} from 'styled-components';
import ExpertiseTextBox from './ExpertiseTextBox';
import {motion} from 'framer-motion';

const transition = {
  ease: 'easeInOut',
  duration: 0.7,
  y: {duration: 0.7},
};

const expertise = [
  {
    title: 'Brand Concepting',
    num: '01',
    descript: ['Brand Strategy', 'Customer Experience', 'Brand Slogan & Visual Identity', 'Space Concept'],
    idx: 1,
  },
  {
    title: 'Brand Experience Design',
    num: '02',
    descript: ['Brand Experience', 'Space Design', 'Motion & Sensory Identity', 'Brand Behavior System'],
    idx: 2,
  },
  {
    title: 'Creative & Activation',
    num: '03',
    descript: ['Brand Communication', 'Branded Contents', 'Digital Marketing', 'Advertising', 'Training & Education'],
    idx: 3,
  },
];

function ExpertiseText() {
  return (
    <TextContainer>
      <motion.div initial={{opacity: 0, y: 130}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={transition}>
        <BigText>Expertise</BigText>
      </motion.div>
      <ExpertiseContainer>
        {expertise.map((data, index) => (
          <ExpertiseTextBox text={data} key={index} />
        ))}
      </ExpertiseContainer>
      <BigLogoContainer>
        <SpinIcon>*</SpinIcon>
        <BigLogo>
          <SpinText>C</SpinText>
          <span style={{color: '#0066FF'}}>C</span>RE
        </BigLogo>
        <BigLogo>MAKE</BigLogo>
      </BigLogoContainer>
    </TextContainer>
  );
}
export default ExpertiseText;

const TextContainer = styled.div`
  position: relative;
`;

const SpinText = styled.span`
  position: absolute;
  transform: translateY(-0.2vw);
`;

const BigText = styled.h3`
  font-size: 1.8vw;
  font-family: 'Gotham';
  margin-bottom: 5.2vw;
`;

const ExpertiseContainer = styled.div`
  padding-left: 0;
`;

const BigLogoContainer = styled.div`
  position: absolute;
  right: -3.6vw;
  top: 1.1vw;
  font-size: 16vw;
  font-family: 'Gotham';
  line-height: 1.09;
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinIcon = styled.span`
  position: absolute;
  top: 0vw;
  left: 7vw;
  margin-right: 2.6vw;
  animation: ${Spin} 10s linear infinite;
  transform-origin: center;
  height: 5.8vw;
  line-height: 11.8vw;
`;

const BigLogo = styled.p`
  letter-spacing: 1.5vw;
  margin: 0;
  text-align: right;
`;
