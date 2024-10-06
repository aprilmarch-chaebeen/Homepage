import styled from 'styled-components';
import {memo, Suspense} from 'react';
import * as React from 'react'

const BallAnimation = React.lazy(() => import('./BallAnimation'));

function HomeJourney() {
  return (
    <JourneySection>
      <BigText>Work Journey Map.</BigText>
      <Suspense>
        <MemoizedBallAnimation />
      </Suspense>
      <Line />
    </JourneySection>
  );
}

export default HomeJourney;

const MemoizedBallAnimation = memo(BallAnimation);

const JourneySection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 10vw 0;
  height: 35vw;
  position: relative;
  z-index: 0;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 130vw;
  }
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2ff52;
  position: absolute;
  z-index: -1;
  height: 0.1vw;
  top: 58%;
  width: 100vw; /* 고정 너비 설정으로 성능 최적화 */

  @media (max-width: 1280px) {
    height: 0.5vw;
    top: 55%;
  }
`;

const BigText = styled.h3`
  font-family: 'Gotham-Black', sans-serif;
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 3vw;
  font-size: 3.2vw;

  @media (max-width: 480px) {
    font-size: 6vw;
    text-align: center;
    margin-top: 12vw;
    margin-left: 0;
  }
`;
