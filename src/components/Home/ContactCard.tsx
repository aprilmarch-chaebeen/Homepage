import styled from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward.svg';
import arrowwhitesrc from '../../assets/svg/arrow_outward_w.svg';
import starsrc from '../../assets/svg/star.svg';
import starbsrc from '../../assets/svg/star_b.svg';
import React, {useState} from 'react';

interface ContactCardProps {
  title: string;
  descript: string;
}

function ContactCard({title, descript}: ContactCardProps) {
  const [cardHovered, setCardHovered] = useState(false);

  const modifiedTitle = title.split(',').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < title.split(',').length - 1 && (cardHovered ? <StarImg src={starbsrc} alt="star" /> : <StarImg src={starsrc} alt="star" />)}
    </React.Fragment>
  ));

  return (
    <Card onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)}>
      <Title>{modifiedTitle}</Title>
      <Descript>{descript}</Descript>
      <Button>
        상담하기
        <Arrow></Arrow>
      </Button>
    </Card>
  );
}

export default ContactCard;

const Card = styled.div`
  background-color: #050505;
  color: #fff;
  height: 23vw;
  width: calc(100vw / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ff5900;
    transition: background-color 0.5s;
  }
`;

const Title = styled.h3`
  font-family: 'GmarketSansMedium';
  margin: 0;
  font-size: 2vw;
  ${Card}:hover & {
    color: #000;
    transition: color 0.5s;
  }
`;

const Descript = styled.p`
  font-size: 0.9vw;
  width: 15vw;
  margin: 2vw 0;
  line-height: 1.5;
  color: #ebebeb;
`;

const StarImg = styled.img`
  margin: 0 0.5vw;
  width: 1.5vw;
  ${Card}:hover & {
    color: #000;
    transition: color 0.5s;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #fff;
  display: flex;
  font-size: 1vw;
  justify-content: center;
  align-items: center;
  width: 9vw;
  height: 2.6vw;

  ${Card}:hover & {
    background-color: #000;
    color: #fff;
    transition: background-color 0.5s;
    transition: color 0.5s;
  }
`;

const Arrow = styled.div`
  background-image: url(${arrowsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.1vw;
  height: 1.1vw;
  margin-left: 0.7vw;
  ${Card}:hover & {
    background-image: url(${arrowwhitesrc});
  }
`;
