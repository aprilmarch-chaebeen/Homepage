import identitysrc from '../../assets/svg/Identity.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video_production.svg';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

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

const Circlesbgimg = [identitysrc, besrc, trendsrc, websrc, uxsrc, designsrc, videosrc];

function BallAnimation() {
  const ballSettings = [
    {duration: 2200, start: 0, end: 20},
    {duration: 1900, start: 5, end: 20},
    {duration: 1500, start: 8, end: 20},
    {duration: 1800, start: 7, end: 20},
    {duration: 2000, start: 5, end: 20},
    {duration: 1900, start: 6, end: 20},
    {duration: 2200, start: 2, end: 20},
  ];

  return (
    <BallContainer>
      {ballSettings.map((settings, index) => (
        <Ball key={index} src={Circlesbgimg[index]} alt={`ball ${index}`} $y={useQuadBounce(settings)} />
      ))}
    </BallContainer>
  );
}

export default BallAnimation;

const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 7vw;
`;

const Ball = styled.img<{$y: number}>`
  width: 10vw;
  margin-right: 2vw;
  transform: translate3d(0, ${(p) => p.$y}vw, 0);
`;
