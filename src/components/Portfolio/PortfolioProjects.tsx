import styled from 'styled-components';
import ProjectCategory from './ProjectCategory';

function PortfolioProjects() {
  return (
    <ProjectSection>
      <Title>Project</Title>
      <ProjectCategory />
    </ProjectSection>
  );
}

export default PortfolioProjects;

const ProjectSection = styled.section`
  text-align: center;
  margin-top: 13vw;

  @media (max-width: 1024px) {
    margin-top: 20vw;
  }

  @media (max-width: 480px) {
    margin-top: 23vw;
  }
`;

const Title = styled.h2`
  font-size: 2.4vw;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 3vw;

  @media (max-width: 1024px) {
    font-size: 4vw;
  }

  @media (max-width: 480px) {
    font-size: 7vw;
    margin-bottom: 7vw;
  }
`;
