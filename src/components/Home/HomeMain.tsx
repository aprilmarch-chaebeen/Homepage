import styled, {css, keyframes} from 'styled-components';
import HomeMainText from './HomeMainText';
import {useState} from 'react';
import creativesrc from '../../assets/svg/creative.svg';
import circlesrc from '../../assets/svg/circle_back.svg';
import logosrc from '../../assets/svg/circle_logo.svg';

function HomeMain() {
  const [brandingHovered, setBrandingHovered] = useState(false);
  const [uxuiHovered, setUxuiHovered] = useState(false);
  const [digitalHovered, setDigitalHovered] = useState(false);
  const [dashboardHovered, setDashboardHovered] = useState(false);

  return (
    <MainSection>
      <HomeMainText
        idx={0}
        onMouseEnter={() => setBrandingHovered(true)}
        onMouseLeave={() => setBrandingHovered(false)}
        hovered={uxuiHovered || digitalHovered || dashboardHovered}
        nowHovered={brandingHovered}
        width={23}
      />
      <HomeMainText
        idx={1}
        onMouseEnter={() => setUxuiHovered(true)}
        onMouseLeave={() => setUxuiHovered(false)}
        hovered={digitalHovered || dashboardHovered}
        nowHovered={uxuiHovered}
        width={33}
      />
      <SmallText src={creativesrc} alt="creative design svg" $hovered={digitalHovered || dashboardHovered} />
      <HomeMainText
        idx={2}
        onMouseEnter={() => setDigitalHovered(true)}
        onMouseLeave={() => setDigitalHovered(false)}
        hovered={dashboardHovered}
        nowHovered={digitalHovered}
        width={18}
      />
      <HomeMainText
        idx={3}
        onMouseEnter={() => setDashboardHovered(true)}
        onMouseLeave={() => setDashboardHovered(false)}
        nowHovered={dashboardHovered}
        width={40}
      />
      <Container>
        <div style={{width: '10vw'}}></div>
        <TextContainer>
          <Text>Marketing</Text>
          <Text>Data Infographics</Text>
        </TextContainer>
        <CircleContainer>
          <Circle src={circlesrc} alt="circle img" />
          <CircleLogo src={logosrc} alt="circle logo img" />
        </CircleContainer>
      </Container>
    </MainSection>
  );
}

export default HomeMain;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0.8;
  margin: 5vw 0;
`;

const SmallText = styled.img<{$hovered: boolean | undefined}>`
  width: 12vw;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-6vw)` : css`translateY(0)`)};
  margin: 0.8vw 0 0.3vw 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const TextContainer = styled.div`
  margin: 3.5vw 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transform: translate(-50%, 0%);
    width: 3.5vw;
    height: 0.25vw;
    background-color: #000;
  }
`;

const Text = styled.p`
  font-size: 1.3vw;
  font-family: 'Satoshi';
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5vw;

  &:nth-child(1) {
    margin-top: 3vw;
  }
`;

const CircleContainer = styled.div`
  position: relative;
  margin: auto 0;
  margin-right: 5vw;
`;

const CircleAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.img`
  width: 6vw;
  animation: ${CircleAnimation} 7s linear infinite;
`;

const CircleLogo = styled.img`
  position: absolute;
  width: 3.5vw;
  left: 0;
  transform: translate(35%, 110%);
`;
