import styled from 'styled-components';
// import { motion } from 'framer-motion';
import imgsrc from '../../assets/svg/howitworks.svg';

// const transition = {
//   ease: 'easeInOut',
//   duration: 5,
//   y: {duration: 1},
// };

function HowItWorks() {
  return (
    <WorkSection>
      <OuterContainer>
        <Img src={imgsrc} />
        <InnerContainer1>
          <SmallText>How it Works</SmallText>
          <BigText>
            고객사를 위한 <BoldText>Full Service Creative</BoldText>
          </BigText>
          <InnerContainer2>
            <InnerContainer3>
              <Step>Step 1</Step>
              <StepText>
                마케팅
                <br />
                상담 진단
              </StepText>
            </InnerContainer3>
            <InnerContainer3>
              <Step>Step 2</Step>
              <StepText>
                전략적인
                <br />
                브랜드 컨설팅
              </StepText>
            </InnerContainer3>
            <InnerContainer3>
              <Step>Step 3</Step>
              <StepText>
                맞춤형
                <br />
                최적화 디자인
              </StepText>
            </InnerContainer3>
            <InnerContainer3>
              <Step>Step 4</Step>
              <StepText>
                꼼꼼한
                <br />
                케어 시스템
              </StepText>
            </InnerContainer3>
          </InnerContainer2>
        </InnerContainer1>
      </OuterContainer>
    </WorkSection>
  );
}

export default HowItWorks;

const WorkSection = styled.section`
  background-color: #050505;
  text-align: left;
  margin-top: 10vw;
  color: #fff;
  padding-bottom: 0;
  width: 100vw;
  position: relative;
`;

const OuterContainer = styled.div`
  display: flex;
`;

const InnerContainer1 = styled.div`
  padding: 4.5vw 5.5vw;
  width: 65%;
`;

const InnerContainer2 = styled.div`
  display: flex;
  color: #727272;
`;

const Img = styled.img`
  width: 35%;
  object-fit: cover;
`;

const SmallText = styled.p`
  color: #d2ff52;
  font-size: 1.2vw;
  font-family: 'Cardo';
  margin: 0;
`;

const BigText = styled.h2`
  font-family: 'Pretendard-ExtraLight';
  margin-top: 1.2vw;
  margin-bottom: 10vw;
  line-height: 1.1;
  font-size: 2.3vw;
`;

const BoldText = styled.span`
  font-family: 'Pretendard-SemiBold';
`;

const InnerContainer3 = styled.div`
  width: 25%;
`;

const Step = styled.p`
  font-size: 1.2vw;
  position: relative;
  font-family: 'Gotham-Light';

  &::after {
    content: '';
    position: absolute;
    width: 12vw;
    height: 0.1vw;
    background-color: #727272;
    left: 0;
    top: 130%;
  }
`;

const StepText = styled.p`
  font-size: 1.7vw;
  font-family: 'Pretendard-SemiBold';
`;
