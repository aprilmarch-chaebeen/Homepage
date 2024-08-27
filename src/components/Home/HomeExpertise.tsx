import styled from 'styled-components';
import ExpertiseText from './ExpertiseText';
import ExpertiseContent from './ExpertiseContent';

function HomeExpertise() {
  return (
    <ExpertiseSection>
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
`;
