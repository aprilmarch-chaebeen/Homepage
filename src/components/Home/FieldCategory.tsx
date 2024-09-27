import styled from 'styled-components';
import nobtnsrc from '../../assets/svg/no_btn.svg';
import starsrc from '../../assets/svg/star_b.svg';
import gobtnsrc from '../../assets/svg/go_btn.svg';
import {useState} from 'react';

interface FieldCategoryProps {
  title: string;
  onClick: () => void;
  clicked: boolean;
  name: string;
}

function FieldCategory({title, onClick, clicked, name}: FieldCategoryProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container onClick={onClick} $clicked={clicked} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button>{clicked || hovered ? <ButtonImg src={gobtnsrc} alt="button" /> : <ButtonImg src={nobtnsrc} alt="button" />}</Button>
      </div>
      <InnerContainer1>
        <Star src={starsrc} alt="star img" />
        <Text>{title}</Text>
      </InnerContainer1>
      <InnerContainer2>
        <SmallImg src={require(`../../assets/images/field_category/${name}_key.svg`).default} alt="small img" />
      </InnerContainer2>
    </Container>
  );
}

export default FieldCategory;

const Container = styled.div<{$clicked: boolean}>`
  background-color: ${(p) => (p.$clicked ? '#d2ff52' : '#f6f6f6')};
  padding: 1.3vw 1vw 1.3vw 6.8vw;
  border-bottom: solid #999 0.1vw;
  height: 9.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: #d2ff52;
  }

  @media (min-width: 1280px) {
    padding: 1.5vw 1.5vw 1.5vw 4.8vw;
    height: 11.5vw;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const ButtonImg = styled.img`
  width: 2.1vw;

  @media (min-width: 1280px) {
    width: 2.5vw;
  }
`;

const InnerContainer1 = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1280px) {
    margin-bottom: 2vw;
  }
`;

const Star = styled.img`
  width: 1.8vw;
  margin-right: 1.5vw;

  @media (min-width: 1280px) {
    width: 2.3vw;
    margin-right: 1.5vw;
  }
`;

const Text = styled.h3`
  font-size: 2.1vw;
  font-family: 'Pretendard-Light';
  margin: 1.6vw 0;

  @media (min-width: 1280px) {
    font-size: 2.5vw;
    margin: 0;
  }
`;

const InnerContainer2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const SmallImg = styled.img`
  height: 1.5vw;
  margin: 0;
  margin-right: 0.3vw;

  @media (min-width: 1280px) {
    height: 2vw;
  }
`;
