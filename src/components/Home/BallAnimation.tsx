import identitysrc from '../../assets/svg/identity_1.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web_build.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video.svg';
import digitalsrc from '../../assets/svg/marketing.svg';
import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';

const getPosition = (elapsedTime: number, h: number, k: number) => {
  const a = (4 * k) / Math.pow(h * 2, 2);
  const ypos = a * Math.pow(((elapsedTime + h) % (h * 2)) - h, 2);
  return ypos;
};

function useQuadBounce({duration = 1200, start = 0, end = 10} = {}) {
  const timeStart = useRef(Date.now());
  const [value, setValue] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() - timeStart.current;
      setValue(start + getPosition(time, duration / 2, end - start));
    }, 1);
    return () => clearInterval(interval);
  }, []);
  return value;
}

const Ballbgimg = [identitysrc, besrc, trendsrc, websrc, uxsrc, designsrc, videosrc, digitalsrc];

function BallAnimation() {
  const ballSettings = [
    {duration: 2200, start: 0, end: 20},
    {duration: 1900, start: 5, end: 20},
    {duration: 1500, start: 8, end: 20},
    {duration: 1800, start: 7, end: 20},
    {duration: 2000, start: 5, end: 20},
    {duration: 1900, start: 6, end: 20},
    {duration: 2200, start: 2, end: 20},
    {duration: 1700, start: 4, end: 20},
  ];

  return (
    <BallContainer>
      {ballSettings.map((settings, index) => {
        const bounceY = useQuadBounce(settings);
        return <Ball key={index} src={Ballbgimg[index]} alt={`ball ${index}`} style={{transform: `translate3d(0, ${bounceY}vw, 0)`}} />;
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
`;

const Ball = styled.img`
  width: 9vw;
  margin-right: 2vw;
`;
