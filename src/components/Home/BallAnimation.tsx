import identitysrc from '../../assets/svg/identity_1.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web_build.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video.svg';
import digitalsrc from '../../assets/svg/marketing.svg';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const getPosition = (elapsedTime: number, h: number, k: number) => {
  const a = (4 * k) / Math.pow(h * 2, 2);
  const ypos = a * Math.pow(((elapsedTime + h) % (h * 2)) - h, 2);
  return ypos;
};

function useQuadBounce({ duration = 1200, start = 0, end = 10 }) {
  const timeStart = useRef(Date.now());
  const [value, setValue] = useState(start);

  useEffect(() => {
    let animationFrameId: number;

    const updateValue = () => {
      const time = Date.now() - timeStart.current;
      setValue(start + getPosition(time, duration / 2, end - start));
      animationFrameId = requestAnimationFrame(updateValue);
    };

    updateValue();

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, start, end]);

  return value;
}

const Ballbgimg = [identitysrc, besrc, trendsrc, websrc, uxsrc, designsrc, videosrc, digitalsrc];

function BallAnimation() {
  const [visibleBall, setVisibleBall] = useState<number | null>(null);
  const isMobile = window.innerWidth <= 480; 

  const ballSettings = isMobile
    ? [
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
        { duration: 1200, start: 0, end: 20 },
      ]
    : [
        { duration: 2200, start: 0, end: 20 },
        { duration: 1900, start: 5, end: 20 },
        { duration: 1500, start: 8, end: 20 },
        { duration: 1800, start: 7, end: 20 },
        { duration: 2000, start: 5, end: 20 },
        { duration: 1900, start: 6, end: 20 },
        { duration: 2200, start: 2, end: 20 },
        { duration: 1700, start: 4, end: 20 },
      ];

  useEffect(() => {
    if (isMobile) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setVisibleBall(currentIndex);
        currentIndex = (currentIndex + 1) % ballSettings.length;
      }, 1500); // 모바일에서 1.5초마다 변경

      return () => clearInterval(interval);
    } else {
      setVisibleBall(null); // 데스크탑에서는 모든 공이 보임
    }
  }, [isMobile]);

  return (
    <BallContainer>
      {ballSettings.map((settings, index) => {
        const bounceY = useQuadBounce(settings);
        return isMobile ? (
          visibleBall === index ? (
            <Ball key={index} src={Ballbgimg[index]} alt={`ball ${index}`} style={{ transform: `translate3d(0, ${bounceY}vw, 0)` }} />
          ) : null
        ) : (
          <Ball key={index} src={Ballbgimg[index]} alt={`ball ${index}`} style={{ transform: `translate3d(0, ${bounceY}vw, 0)` }} />
        );
      })}
    </BallContainer>
  );
}

export default BallAnimation;

const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 7vw;
  position: relative;
  will-change: transform;

  @media (max-width: 480px) {
    margin-top: 25vw;
  }
`;

const Ball = styled.img`
  width: 9vw;
  margin-right: 2vw;

  @media (max-width: 1280px) {
    width: 16vw;
  }

  @media (max-width: 480px) {
    width: 35vw;
  }
`;
