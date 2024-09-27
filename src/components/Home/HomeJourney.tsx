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
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2ff52;
  position: absolute;
  z-index: -1;
  height: 0.1vw;
  top: 58%;
`;

const BigText = styled.h3`
  font-family: 'Gotham-Black';
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 3vw;
  font-size: 3.2vw;
`;
