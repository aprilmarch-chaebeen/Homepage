import styled from 'styled-components';
import ExpertiseContent from './ExpertiseContent';

function HomeExpertise() {
  return (
    <ExpertiseSection>
      <ExpertiseContent />
    </ExpertiseSection>
  );
}

export default HomeExpertise;

const ExpertiseSection = styled.section`
  background-color: #f6f6f6;
  padding-top: 20vw;
  overflow: hidden;
  text-align: left;
  padding-left: 5.6vw;
`;
