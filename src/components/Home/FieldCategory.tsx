import styled from 'styled-components';
import nobtnsrc from '../../assets/svg/no_btn.svg';
import starsrc from '../../assets/svg/star_b.svg';
import gobtnsrc from '../../assets/svg/go_btn.svg';
import {useState, memo, useCallback} from 'react';

interface FieldCategoryProps {
  title: string;
  onClick: () => void;
  clicked: boolean;
  name: string;
}

function FieldCategory({title, onClick, clicked, name}: FieldCategoryProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <Container onClick={onClick} $clicked={clicked} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button>
          {clicked || hovered ? (
            <ButtonImg src={gobtnsrc} alt="button" loading="lazy" />
          ) : (
            <ButtonImg src={nobtnsrc} alt="button" loading="lazy" />
          )}
        </Button>
      </div>
      <InnerContainer1>
        <Star src={starsrc} alt="star img" loading="lazy" />
        <Text>{title}</Text>
      </InnerContainer1>
      <InnerContainer2>
        <SmallImg src={require(`../../assets/images/field_category/${name}_key.svg`).default} alt="small img" loading="lazy" />
      </InnerContainer2>
    </Container>
  );
}

export default memo(FieldCategory);

const Container = styled.div<{$clicked: boolean}>`
  background-color: ${(p) => (p.$clicked ? '#d2ff52' : '#f6f6f6')};
  padding: 1.3vw 1vw 1.3vw 6.8vw;
  border-bottom: solid #999 0.1vw;
  height: 9.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #d2ff52;
  }

  @media (max-width: 1280px) {
    padding: 1.5vw 1.5vw 1.5vw 4.8vw;
    height: 11.5vw;
  }

  @media (max-width: 480px) {
    border: none;
    height: 38vw;
    padding: 0;
    border-top: solid #999 0.1vw;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ButtonImg = styled.img`
  width: 2.1vw;

  @media (max-width: 1280px) {
    width: 2.5vw;
  }
`;

const InnerContainer1 = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    margin-bottom: 2vw;
  }

  @media (max-width: 480px) {
    display: block;
    margin-bottom: 4vw;
  }
`;

const Star = styled.img`
  width: 1.8vw;
  margin-right: 1.5vw;

  @media (max-width: 1280px) {
    width: 2.3vw;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Text = styled.h3`
  font-size: 2.1vw;
  font-family: 'Pretendard-Light', sans-serif;
  margin: 1.6vw 0;

  @media (max-width: 1280px) {
    font-size: 2.5vw;
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 6.5vw;
  }
`;

const InnerContainer2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 480px) {
    display: block;
  }
`;

const SmallImg = styled.img`
  height: 1.5vw;
  margin-right: 0.3vw;

  @media (max-width: 1280px) {
    height: 2vw;
  }

  @media (max-width: 480px) {
    height: 4.5vw;
  }
`;
