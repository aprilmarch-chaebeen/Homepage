import styled from 'styled-components';
import fieldsrc from '../../assets/svg/field_img.svg';
import cursorsrc from '../../assets/svg/cursor_img.svg';

interface FieldDescriptProps {
  descript: string[];
}

function FieldDescript({descript}: FieldDescriptProps) {
  return (
    <Container>
      <SmallText>{descript[0]}</SmallText>
      <BigText>{descript[1]}</BigText>
      <TextContainer>
        <MediumText>{descript[2]}</MediumText>
        <MediumText>{descript[2]}</MediumText>
        <MediumText>{descript[2]}</MediumText>
      </TextContainer>
      <Img src={fieldsrc} alt="field img" />
    </Container>
  );
}

export default FieldDescript;

const Container = styled.div`
  text-align: center;
  padding: 5vw 3vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-SemiBold';
  font-size: 0.9vw;
  color: #777;
`;

const BigText = styled.h3`
  font-family: 'Pretendard-Regular';
  font-size: 2vw;
  color: #222;
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1vw;
  color: #444;
  margin: 0;
`;

const TextContainer = styled.div`
  line-height: 1.6;
  margin-bottom: 2vw;
`;

const Img = styled.img`
  border-radius: 1vw;
  width: 42vw;
  box-sizing: border-box;
  cursor: url(${cursorsrc}), pointer;
`;
