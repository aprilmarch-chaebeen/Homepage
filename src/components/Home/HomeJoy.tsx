import styled, {keyframes} from 'styled-components';
import starsrc from '../../assets/svg/star_g.svg';
import rectsrc from '../../assets/svg/rectangle.svg';
import joy1gsrc from '../../assets/svg/joy1_g.svg';
import joy2gsrc from '../../assets/svg/joy2_g.svg';
import joy3gsrc from '../../assets/svg/joy3_g.svg';
import joy4gsrc from '../../assets/svg/joy4_g.svg';
import joy1bsrc from '../../assets/svg/joy1_b.svg';
import joy2bsrc from '../../assets/svg/joy2_b.svg';
import joy3bsrc from '../../assets/svg/joy3_b.svg';
import circlesrc from '../../assets/svg/small_circle.svg';
import circlebacksrc from '../../assets/svg/circle_back.svg';
import contactsrc from '../../assets/svg/contact_us.svg';
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomeJoy() {
  const svgsRef = useRef<HTMLImageElement[] | null[]>([]);

  useGSAP(
    () => {
      svgsRef.current.forEach((svg) => {
        gsap
          .timeline({
            opacity: 1,
            scrollTrigger: {
              trigger: svg,
              start: 'top top',
              scrub: true,
            },
          })
          .from(svg, {opacity: 0, duration: 5});
      });
    },
    {scope: svgsRef}
  );

  return (
    <Section>
      <Star src={starsrc} alt="star img" />
      <Container $direct="space-between">
        <Rect src={rectsrc} alt="rectangle img" />
        <TextImg src={joy1gsrc} alt="branding text img" />
        <BlueTextImg src={joy1bsrc} alt="branding blue text img" ref={(el) => (svgsRef.current[0] = el)} />
      </Container>
      <Container $direct="space-between">
        <Circle src={circlesrc} alt="circle img" />
        <TextImg src={joy2gsrc} alt="uxui text img" />
        <BlueTextImg src={joy2bsrc} alt="branding blue text img" ref={(el) => (svgsRef.current[1] = el)} />
      </Container>
      <Container $direct="end">
        <TextImg src={joy3gsrc} alt="digital, it text img" />
        <BlueTextImg src={joy3bsrc} alt="branding blue text img" ref={(el) => (svgsRef.current[2] = el)} />
      </Container>
      <Container $direct="space-evenly">
        <TextImg src={joy4gsrc} alt="aprilmarch text img" />
        <CircleContainer>
          <CircleBack src={circlebacksrc} alt="circle back img" />
          <Contact src={contactsrc} alt="circle contact us" />
        </CircleContainer>
      </Container>
      <Line1 />
      <Line2 />
    </Section>
  );
}

export default HomeJoy;

const Section = styled.section`
  background-color: #f6f6f6;
  padding: 5vw 0;
  position: relative;
  z-index: 0;
`;

const Line1 = styled.hr`
  background-color: #ededed;
  border: 0;
  transform: rotate(28.54deg);
  position: absolute;
  top: 33%;
  left: -10%;
  width: 51.5vw;
  height: 0.1vw;
  z-index: -1;
`;

const Line2 = styled.hr`
  background-color: #ededed;
  border: 0;
  transform: rotate(53.04deg);
  position: absolute;
  top: 52.1%;
  left: -10%;
  width: 39vw;
  height: 0.1vw;
  z-index: -1;
`;

const Star = styled.img`
  width: 2.7vw;
  margin-top: 1vw;
  margin-bottom: 7vw;
`;

const Container = styled.div<{$direct: string}>`
  display: flex;
  justify-content: ${(p) => p.$direct};
  align-items: center;
`;

const Rect = styled.img`
  height: 1.4vw;
  margin-left: 5vw;
`;

const TextImg = styled.img`
  height: 13vw;
  position: relative;
`;

const BlueTextImg = styled.img`
  height: 13vw;
  position: absolute;
  right: 0;
`;

const Circle = styled.img`
  width: 4vw;
  margin-left: 5vw;
`;

const CircleContainer = styled.div`
  position: relative;
  margin: auto 0;
  margin-right: 5vw;
`;

const CircleAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleBack = styled.img`
  width: 10vw;
  animation: ${CircleAnimation} 7s linear infinite;
`;

const Contact = styled.img`
  position: absolute;
  height: 0.9vw;
  left: 0;
  transform: translate(28%, 520%);
`;
