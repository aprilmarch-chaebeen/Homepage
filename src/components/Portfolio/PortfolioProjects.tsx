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
  margin-top: 9rem;
`;

const Title = styled.h2`
  font-size: 3.5vw;
  font-family: 'Poppins';
  font-weight: 600;
`;
