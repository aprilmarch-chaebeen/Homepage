import styled from 'styled-components';
import linesrc from '../../assets/svg/expertise_line.svg';
import plussrc from '../../assets/svg/expertise_plus.svg';

function ExpertiseContent() {
  return (
    <ContentSection>
      <ExpertLine src={linesrc} alt="expertise line" />
      <LineContainer>
        <LineContent $left={0} $bottom={0}>
          <Ratio $height={34.8}>35</Ratio>
          <Content>RESEARCH</Content>
        </LineContent>
        <LineContent $left={6.5} $bottom={12.5}>
          <Ratio $height={20}>10</Ratio>
          <Content>PLAN</Content>
        </LineContent>
        <LineContent $left={45} $bottom={27.6}>
          <Ratio $height={12.2}>80</Ratio>
          <Content>DESIGN</Content>
        </LineContent>
        <LineContent $bottom={9.5} $right={5.1}>
          <Ratio $height={3.5}>15</Ratio>
          <Content>DEVELOP</Content>
        </LineContent>
        <LineContent $right={0} $bottom={0}>
          <Ratio $height={34.8}>30</Ratio>
          <Content>MANAGE</Content>
        </LineContent>
        <SmallText>DESIGN</SmallText>
      </LineContainer>
    </ContentSection>
  );
}

export default ExpertiseContent;

const ContentSection = styled.div`
  position: relative;
  padding-top: 24vw;
`;

const ExpertLine = styled.img`
  display: block;
  position: relative;
  width: 90vw;
  height: 45vw;
`;

const LineContainer = styled.div`
  position: absolute;
  bottom: 18vw;
  width: 90vw;
  height: 51vw;

  &::before {
    position: absolute;
    top: 3.2vw;
    left: 7.9vw;
    content: '';
    width: 0.9vw;
    height: 0.9vw;
    background: url(${plussrc}) no-repeat center / cover;
  }
`;

const LineContent = styled.p<{$left?: number; $bottom: number; $right?: number}>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  left: ${(p) => p.$left}vw;
  bottom: ${(p) => p.$bottom}vw;
  right: ${(p) => p.$right}vw;
`;

const Ratio = styled.span<{$height: number}>`
  font-size: 1.25vw;
  font-family: 'Gotham';

  &::before {
    display: block;
    content: '';
    width: 0.05vw;
    background-color: #000;
    margin: 1.4vw auto 2.1vw;
    height: ${(p) => p.$height}vw;
  }
`;

const Content = styled.span`
  font-size: 0.8vw;
  transform: rotate(-90deg) translateX(1.5625vw);
`;

const SmallText = styled.span`
  position: absolute;
  font-family: 'Pretendard-Bold';
  right: -1vw;
  top: -3vw;
  font-size: 1.5vw;
  transform: rotate(90deg) translateX(1.5625vw);
`;
