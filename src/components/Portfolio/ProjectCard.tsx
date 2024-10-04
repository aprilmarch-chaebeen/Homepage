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

  @media (max-width: 1024px) {
    width: 25vw;
  }

  @media (max-width: 480px) {
    width: 40vw;
  }
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

  @media (max-width: 1024px) {
    width: 25vw;
    height: 32.685vw;
  }

  @media (max-width: 480px) {
    width: 40vw;
    height: 52.051vw;
  }
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Title = styled.p`
  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 1.1vw;
  margin: 0.7vw 0 0.2vw 0;
  color: #222;

  @media (max-width: 1024px) {
    font-size: 1.6vw;
  }

  @media (max-width: 480px) {
    font-size: 3.9vw;
    margin: 1.5vw 0 2vw 0;
  }
`;

const Descript = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 0.9vw;
  margin: 0;
  margin-bottom: 3vw;
  color: #888;
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 1.3vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 7vw;
  }
`;
