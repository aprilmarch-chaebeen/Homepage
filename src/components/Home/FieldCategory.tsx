import styled from 'styled-components';
import nobtnsrc from '../../assets/svg/no_btn.svg';
import starsrc from '../../assets/svg/star_b.svg';
import smallsrc from '../../assets/svg/small_creativity.svg';
import gobtnsrc from '../../assets/svg/go_btn.svg';

interface FieldCategoryProps {
  title: string;
  text: string;
  onClick: () => void;
  clicked: boolean;
}

function FieldCategory({title, text, onClick, clicked}: FieldCategoryProps) {
  return (
    <Container onClick={onClick} $clicked={clicked}>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button>{clicked ? <ButtonImg src={gobtnsrc} alt="button" /> : <ButtonImg src={nobtnsrc} alt="button" />}</Button>
      </div>
      <InnerContainer1>
        <Star src={starsrc} alt="star img" />
        <Text>{title}</Text>
      </InnerContainer1>
      <InnerContainer2>
        <SmallImg src={smallsrc} alt="small img" />
        <SmallText>•</SmallText>
        <SmallText>{text}</SmallText>
      </InnerContainer2>
    </Container>
  );
}

export default FieldCategory;

const Container = styled.div<{$clicked: boolean}>`
  background-color: ${(p) => (p.$clicked ? '#d2ff52' : '#f6f6f6')};
  padding: 1.5vw 1.5vw 1.5vw 4.5vw;
  border-bottom: solid #999 0.1vw;
  height: 11.5vw;

  &:hover {
    background-color: #d2ff52;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const ButtonImg = styled.img`
  width: 2.5vw;
`;

const InnerContainer1 = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  width: 2vw;
  margin-right: 1.5vw;
`;

const Text = styled.h3`
  font-size: 2.3vw;
  font-family: 'Pretendard-Light';
  margin: 1vw 0 1.5vw 0;
`;

const InnerContainer2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const SmallImg = styled.img`
  width: 5vw;
  margin: 0;
  margin-right: 0.3vw;
`;

const SmallText = styled.p`
  font-size: 1.1vw;
  font-family: 'Pretendard-Regular';
  color: #555;
  margin: 0;
  margin-right: 0.3vw;
`;
