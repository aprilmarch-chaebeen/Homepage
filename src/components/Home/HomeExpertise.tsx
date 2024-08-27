import styled from 'styled-components';
import ExpertiseText from './ExpertiseText';
import ExpertiseContent from './ExpertiseContent';
import arrowsrc from '../../assets/svg/right_arrow.svg';

function HomeExpertise() {
  return (
    <ExpertiseSection>
      <Arrow src={arrowsrc} alt="right arrow" />
      <ExpertiseText />
      <ExpertiseContent />
    </ExpertiseSection>
  );
}

export default HomeExpertise;

const ExpertiseSection = styled.section`
  background-color: #ff5900;
  padding-top: 20vw;
  overflow: hidden;
  text-align: left;
  padding-left: 5.6vw;
  position: relative;
`;

const Arrow = styled.img`
  width: 1vw;
  position: absolute;
  top: 3vw;
  right: 3vw;
`;
