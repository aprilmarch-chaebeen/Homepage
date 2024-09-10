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
  padding: 13vw 0;
  height: 90vw;
  position: relative;
  z-index: -2;
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2ff52;
  width: 100vw;
  position: absolute;
  z-index: -1;
  height: 0.1vw;
  top: 58%;
`;

const BigText = styled.h3`
  font-family: 'Gotham';
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 5vw;
  font-size: 3.4vw;
`;
