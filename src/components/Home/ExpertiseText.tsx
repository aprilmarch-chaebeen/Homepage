import styled from 'styled-components';
import ExpertiseTextBox from './ExpertiseTextBox';

const expertise = [
  {
    title: 'Brand Concepting',
    num: '01',
    descript: ['Brand Strategy', 'Customer Experience', 'Brand Slogan & Visual Identity', 'Space Concept'],
  },
  {
    title: 'Brand Experience Design',
    num: '02',
    descript: ['Brand Experience', 'Space Design', 'Motion & Sensory Identity', 'Brand Behavior System'],
  },
  {
    title: 'Creative & Activation',
    num: '03',
    descript: ['Brand Communication', 'Branded Contents', 'Digital Marketing', 'Advertising', 'Training & Education'],
  },
];

function ExpertiseText() {
  return (
    <TextContainer>
      <BigText>Expertise</BigText>
      <ExpertiseContainer>
        {expertise.map((data, index) => (
          <ExpertiseTextBox text={data} key={index} />
        ))}
      </ExpertiseContainer>
      <BigLogoContainer>
        <SpinIcon>*</SpinIcon>
        <BigLogo>CRE</BigLogo>
        <BigLogo>MAKE</BigLogo>
      </BigLogoContainer>
    </TextContainer>
  );
}
export default ExpertiseText;

const TextContainer = styled.div`
  position: relative;
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
  top: -16.1vw;
  font-size: 18vw;
  font-family: 'Gotham';
`;

const SpinIcon = styled.span`
  position: relative;
  top: 14vw;
  left: 8vw;
  margin-right: 2.6vw;
  animation: spain 10s linear infinite;
  transform-origin: center;
  height: 5.8vw;
  line-height: 11.8vw;
`;

const BigLogo = styled.p`
  letter-spacing: 1.5vw;
  margin: 0;
  text-align: right;
`;
