import styled from 'styled-components';
import ProjectPopup from './ProjectPopup';
import {useState} from 'react';

interface ProjectCardProps {
  title: string;
  descript: string;
  imgsrc: string;
  flag: string;
  num: number;
}

function ProjectCard({title, descript, imgsrc, flag, num}: ProjectCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <CardContainer onClick={handlePopupOpen}>
      <CardButton>
        <Card src={imgsrc} alt="project card img" loading="lazy" />
      </CardButton>
      <TextContainer>
        <Title>{title}</Title>
        <Descript>{descript}</Descript>
      </TextContainer>
      {isPopupOpen && <ProjectPopup title={title} descript={descript} onClose={handlePopupClose} flag={flag} num={num} />}
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  cursor: pointer;
`;

const CardButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const Card = styled.img`
  background-color: #d9d9d9;
  width: 16vw;
  height: 20.861vw;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Title = styled.p`
  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 1.1vw;
  margin: 1vw 0 0.5vw 0;
`;

const Descript = styled.p`
  font-family: 'Pretendard-ExtraLight';
  font-size: 1vw;
  margin: 0;
  margin-bottom: 3vw;
`;
