import styled from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward.svg';
import arrowwhitesrc from '../../assets/svg/arrow_outward_w.svg';

interface ContactCardProps {
  title: string;
  descript: string;
}

function ContactCard({title, descript}: ContactCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
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
  }
`;

const Title = styled.h3`
  font-family: 'GmarketSansMedium';
  margin: 0;
  ${Card}:hover & {
    color: #000;
  }
`;

const Descript = styled.p`
  font-size: 1vw;
  width: 15.5vw;
  margin-bottom: 1.5vw;
  line-height: 1.5;
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  background-color: #fff;
  display: flex;

  ${Card}:hover & {
    background-color: #000;
    color: #fff;
  }
`;

const Arrow = styled.div`
  background-image: url(${arrowsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.2vw;
  height: 1.2vw;
  ${Card}:hover & {
    background-image: url(${arrowwhitesrc});
  }
`;
