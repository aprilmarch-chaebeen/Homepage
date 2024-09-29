import styled from 'styled-components';
import linesrc from '../../assets/svg/expertise_line.svg';
import linebsrc from '../../assets/svg/expertise_line_b.svg';
import plussrc from '../../assets/svg/expertise_plus.svg';
import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';

const transition = {
  ease: 'easeInOut',
  duration: 0.7,
  opacity: {duration: 0.7},
};

function ExpertiseContent() {
  const [mobileSize, setMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContentSection>
      <ExpertLine src={linebsrc} alt="expertise line" />
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: false}} transition={transition} style={{originX: 1}}>
        <BlueExpertLine src={linesrc} alt="blue expertise line" />
      </motion.div>
      <LineContainer>
        <LineContent $left={0} $bottom={0} $hideRatioOnMobile={true}>
          <Ratio>35</Ratio>
          <motion.div
            initial={{opacity: 0, scaleY: 0}}
            whileInView={{opacity: 1, scaleY: 1}}
            viewport={{once: false}}
            transition={transition}
            style={{originY: 1}}
          >
            <Line $height={mobileSize ? 28 : 34.8}></Line>
          </motion.div>
          <Content>RESEARCH</Content>
        </LineContent>
        <LineContent $left={mobileSize ? 10 : 6.5} $bottom={mobileSize ? 9 : 12.5}>
          <Ratio>10</Ratio>
          <motion.div
            initial={{opacity: 0, scaleY: 0}}
            whileInView={{opacity: 1, scaleY: 1}}
            viewport={{once: false}}
            transition={transition}
            style={{originY: 1}}
          >
            <Line $height={mobileSize ? 27 : 20}></Line>
          </motion.div>
          <Content>PLAN</Content>
        </LineContent>
        <LineContent $left={45} $bottom={mobileSize ? 21 : 27.6}>
          <Ratio>80</Ratio>
          <motion.div
            initial={{opacity: 0, scaleY: 0}}
            whileInView={{opacity: 1, scaleY: 1}}
            viewport={{once: false}}
            transition={transition}
            style={{originY: 1}}
          >
            <Line $height={mobileSize ? 30 : 12.2}></Line>
          </motion.div>
          <Content>DESIGN</Content>
        </LineContent>
        <LineContent $bottom={mobileSize ? 9 : 9.5} $right={mobileSize ? 7 : 5.1}>
          <Ratio>15</Ratio>
          <motion.div
            initial={{opacity: 0, scaleY: 0}}
            whileInView={{opacity: 1, scaleY: 1}}
            viewport={{once: false}}
            transition={transition}
            style={{originY: 1}}
          >
            <Line $height={mobileSize ? 27 : 3.5}></Line>
          </motion.div>
          <Content>DEVELOP</Content>
        </LineContent>
        <LineContent $right={0} $bottom={0} $hideRatioOnMobile={true}>
          <Ratio>30</Ratio>
          <motion.div
            initial={{opacity: 0, scaleY: 0}}
            whileInView={{opacity: 1, scaleY: 1}}
            viewport={{once: false}}
            transition={transition}
            style={{originY: 1}}
          >
            <Line $height={mobileSize ? 28 : 34.8}></Line>
          </motion.div>
          <Content>MANAGE</Content>
        </LineContent>
      </LineContainer>
    </ContentSection>
  );
}

export default ExpertiseContent;

const ContentSection = styled.div`
  position: relative;
  padding-top: 10vw;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

const ExpertLine = styled.img`
  display: block;
  position: relative;
  width: 90vw;
  height: 45vw;

  @media (max-width: 480px) {
    width: 130vw;
    height: 51vw;
  }
`;

const BlueExpertLine = styled.img`
  position: absolute;
  width: 90vw;
  height: 45vw;
  bottom: 0;

  @media (max-width: 480px) {
    width: 130vw;
    height: 51vw;
  }
`;

const LineContainer = styled.div`
  position: absolute;
  bottom: 18vw;
  width: 90vw;
  height: 51vw;

  /* &::before {
    position: absolute;
    top: 3.2vw;
    left: 7.9vw;
    content: '';
    width: 0.9vw;
    height: 0.9vw;
    background: url(${plussrc}) no-repeat center / cover;
  } */

  @media (max-width: 480px) {
    width: 95vw;
    margin-bottom: 14vw;
  }
`;

const LineContent = styled.div<{$left?: number; $bottom: number; $right?: number; $hideRatioOnMobile?: boolean}>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  left: ${(p) => p.$left}vw;
  bottom: ${(p) => p.$bottom}vw;
  right: ${(p) => p.$right}vw;

  ${(p) =>
    p.$hideRatioOnMobile &&
    `
    @media (max-width: 480px) {
      & ${Ratio} {
        display: none;
      }
    }
  `}
`;

const Line = styled.div<{$height: number}>`
  width: 0.05vw;
  background-color: #1c46f5;
  margin: 1.4vw auto 2.1vw;
  height: ${(p) => p.$height}vw;

  @media (max-width: 480px) {
    margin-top: 4vw;
  }
`;

const Ratio = styled.span`
  font-size: 1.25vw;
  font-family: 'Gotham', sans-serif;
  color: #1c46f5;

  @media (max-width: 1280px) {
    font-size: 1.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const Content = styled.span`
  font-size: 0.8vw;
  transform: rotate(-90deg) translateX(1.5625vw);
  color: #1c46f5;

  @media (max-width: 1280px) {
    font-size: 1vw;
  }

  @media (max-width: 480px) {
    font-size: 2vw;
  }
`;
