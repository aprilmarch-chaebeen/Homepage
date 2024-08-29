// import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
// import {motion} from 'framer-motion';
// import {useEffect, useRef} from 'react';
import BallAnimation from './BallAnimation';

// const transitionValues = {
//   duration: 2,
//   repeat: Infinity,
//   ease: 'easeOut',
// };

function HomeJourney() {
  return (
    <JourneySection>
      <BigText>Work Journey Map.</BigText>
      <BallAnimation />
      {/* <MarqueeDiv autoFill={true} direction="right" speed={20}>
        <motion.div animate={{y: [30, 0, 30]}} transition={transitionValues}>
          <WorkImg src={identitysrc} alt="identity" />
        </motion.div>
        <motion.div animate={{y: [0, 30, 0]}} transition={transitionValues}>
          <WorkImg src={besrc} alt="be" />
        </motion.div>
        <motion.div animate={{y: [30, 0, 30]}} transition={transitionValues}>
          <WorkImg src={trendsrc} alt="trend" />
        </motion.div>
        <motion.div animate={{y: [0, 30, 0]}} transition={transitionValues}>
          <WorkImg src={websrc} alt="web" />
        </motion.div>
        <motion.div animate={{y: [30, 0, 30]}} transition={transitionValues}>
          <WorkImg src={uxsrc} alt="ux" />
        </motion.div>
        <motion.div animate={{y: [0, 30, 0]}} transition={transitionValues}>
          <WorkImg src={designsrc} alt="design" />
        </motion.div>
        <motion.div animate={{y: [30, 0, 30]}} transition={transitionValues}>
          <WorkImg src={videosrc} alt="video" />
        </motion.div>
      </MarqueeDiv> */}
    </JourneySection>
  );
}

export default HomeJourney;

const JourneySection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 13vw 0;
  height: 40vw;
`;

const BigText = styled.h3`
  font-family: 'Gotham';
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 5vw;
  font-size: 3.4vw;
`;

// const MarqueeDiv = styled(Marquee)`
//   height: 25vw;
// `;

// const WorkImg = styled.img`
//   margin-right: 24px;
//   width: 16vw;
// `;
