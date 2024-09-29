import statuesrc from '../../assets/svg/statue.svg';
import styled from 'styled-components';
import plussrc from '../../assets/svg/about_plus.svg';

function HomeAbout() {
  return (
    <AboutSection>
      <AboutContainer>
        <BigText>ABOUT APRILMARCH</BigText>
        <TextContainer>
          <SmallText $font="Gotham-Medium, sans-serif">
            Our expertise, passion,
            <br />
            and sincere influence
            <br />
            deliver strong faith to
            <br />
            our customers and
            <br />
            new joy to consumers.
          </SmallText>
          <SmallText $font="Pretendard-Light, sans-serif">
            우리의 전문성과 열정,
            <br />
            진심 영향력은 고객사에게는 든든한 믿음을,
            <br />
            소비자에게는 새로운 기쁨을
            <br />
            전달합니다.
          </SmallText>
        </TextContainer>
        <StatueImg src={statuesrc} alt="Statue" />
      </AboutContainer>
    </AboutSection>
  );
}

export default HomeAbout;

const AboutSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 5vw 6vw;
  padding-bottom: 0;
  border-top: 0.01vw solid;
  position: relative;
  height: 40vw;
`;

const AboutContainer = styled.div`
  &::before {
    display: block;
    content: '';
    background: url(${plussrc}) no-repeat center / cover;
    width: 1vw;
    height: 1vw;
    margin-bottom: 5vw;
  }
  &::after {
    display: block;
    content: '';
    background: url(${plussrc}) no-repeat center / cover;
    width: 1vw;
    height: 1vw;
    margin-top: 11vw;
  }
`;

const BigText = styled.h3`
  font-family: 'Gotham-Medium', sans-serif;
  margin: 0;
  font-size: 3vw;
  text-align: left;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36%;
  text-align: left;
  line-height: 2;
  font-size: 0.8vw;
  margin-top: 5.5vw;
`;

const SmallText = styled.p<{$font: string}>`
  font-family: ${(p) => p.$font};
`;

const StatueImg = styled.img`
  width: 32vw;
  position: absolute;
  top: 5vw;
  right: 5.5vw;
`;
