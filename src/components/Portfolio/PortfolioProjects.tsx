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
  margin-top: 17vw;
`;

const Title = styled.h2`
  font-size: 3vw;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 3vw;
`;
