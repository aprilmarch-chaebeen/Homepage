import styled from 'styled-components';
import fieldsrc from '../../assets/svg/field_img.svg';

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
  padding: 5vw 3vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-SemiBold';
  font-size: 1vw;
  color: #777;
`;

const BigText = styled.h3`
  font-family: 'Pretendard-Medium';
  font-size: 2.3vw;
  color: #222;
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1.4vw;
  color: #444;
  margin: 0;
`;

const TextContainer = styled.div`
  line-height: 1.5;
  margin-bottom: 5vw;
`;

const Img = styled.img`
  border-radius: 1vw;
  width: 42vw;
  box-sizing: border-box;
`;
