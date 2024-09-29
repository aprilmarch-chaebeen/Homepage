import styled from 'styled-components';
import BallAnimation from './BallAnimation';

function HomeJourney() {
  return (
    <JourneySection>
      <BigText>Work Journey Map.</BigText>
      <BallAnimation />
      <Line />
    </JourneySection>
  );
}

export default HomeJourney;

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

  @media (max-width: 1280px) {
    height: 0.5vw;
    width: 100vw;
    top: 55%;
  }
`;

const BigText = styled.h3`
  font-family: 'Gotham-Black';
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 3vw;
  font-size: 3.2vw;

  @media (max-width: 480px) {
    font-size: 6vw;
    text-align: center;
    margin: 0;
    margin-top: 12vw;
  }
`;
