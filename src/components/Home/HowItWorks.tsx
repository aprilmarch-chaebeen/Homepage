import styled from 'styled-components';
import imgsrc from '../../assets/svg/howitworks.svg';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[] | null[]>([]);
  const linesRef = useRef<HTMLElement[] | null[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {scale: 0.7, borderRadius: 50, ease: 'none'},
        {
          scale: 1,
          borderRadius: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            pin: false,
            scrub: 1,
            start: 'center 10%',
            end: 'top 25%',
          },
        }
      );
    },
    {scope: containerRef}
  );

  useGSAP(
    () => {
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          {color: '#727272', scale: 0.5},
          {
            color: '#fff',
            scale: 1,
            duration: 1,
            delay: index * 2 + 1,
            scrollTrigger: {
              trigger: step,
              toggleActions: 'play none none none',
              start: 'top 25%',
            },
          }
        );
      });
    },
    {scope: containerRef}
  );

  useGSAP(
    () => {
      linesRef.current.forEach((line, index) => {
        gsap.fromTo(
          line,
          {backgroundColor: '#727272', scaleX: 0, transformOrigin: 'left'},
          {
            backgroundColor: '#fff',
            scaleX: 1,
            duration: 1,
            delay: index * 2 + 1,
            scrollTrigger: {
              trigger: line,
              toggleActions: 'play none none none',
              start: 'top 25%',
            },
          }
        );
      });
    },
    {scope: containerRef}
  );

  return (
    <WorkSection ref={containerRef}>
      <OuterContainer>
        <Img src={imgsrc} />
        <InnerContainer1>
          <SmallText>How it Works</SmallText>
          <BigText>
            고객사를 위한 <BoldText>Full Service Creative</BoldText>
          </BigText>
          <InnerContainer2>
            <InnerContainer3 ref={(el) => (stepsRef.current[0] = el)}>
              <Step>Step 1</Step>
              <Line ref={(el) => (linesRef.current[0] = el)} />
              <StepText>
                마케팅
                <br />
                상담 진단
              </StepText>
            </InnerContainer3>
            <InnerContainer3 ref={(el) => (stepsRef.current[1] = el)}>
              <Step>Step 2</Step>
              <Line ref={(el) => (linesRef.current[1] = el)} />
              <StepText>
                전략적인
                <br />
                브랜드 컨설팅
              </StepText>
            </InnerContainer3>
            <InnerContainer3 ref={(el) => (stepsRef.current[2] = el)}>
              <Step>Step 3</Step>
              <Line ref={(el) => (linesRef.current[2] = el)} />
              <StepText>
                맞춤형
                <br />
                최적화 디자인
              </StepText>
            </InnerContainer3>
            <InnerContainer3 ref={(el) => (stepsRef.current[3] = el)}>
              <Step>Step 4</Step>
              <Line ref={(el) => (linesRef.current[3] = el)} />
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
  height: 32vw;
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
  height: 32vw;
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
`;

const Line = styled.hr`
  position: absolute;
  width: 12vw;
  height: 0.01vw;
  background-color: #727272;
  left: 0;
  top: 25%;
  border: none;
`;

const StepText = styled.p`
  font-size: 1.7vw;
  font-family: 'Pretendard-SemiBold';
`;
