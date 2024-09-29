import styled, {keyframes} from 'styled-components';
import HomeMainText from './HomeMainText';
import {useEffect, useState} from 'react';
import creativesrc from '../../assets/svg/creative.svg';
import circlesrc from '../../assets/svg/circle_back.svg';
import contactsrc from '../../assets/svg/contact_us.svg';
import contactmsrc from '../../assets/svg/contact_mobile.svg';
import downsrc from '../../assets/svg/down_icon.svg';

function HomeMain() {
  const [brandingHovered, setBrandingHovered] = useState(false);
  const [uxuiHovered, setUxuiHovered] = useState(false);
  const [digitalHovered, setDigitalHovered] = useState(false);
  const [dashboardHovered, setDashboardHovered] = useState(false);

  const [itImgIdx, setItImgIdx] = useState(3);
  const [contactSrc, setContactSrc] = useState(contactsrc);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItImgIdx(4);
        setContactSrc(contactmsrc);
      } else {
        setItImgIdx(3);
        setContactSrc(contactSrc);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainSection>
      <HomeMainText
        idx={0}
        onMouseEnter={() => setBrandingHovered(true)}
        onMouseLeave={() => setBrandingHovered(false)}
        hovered={uxuiHovered || digitalHovered || dashboardHovered}
        nowHovered={brandingHovered}
        width={28}
        mobileWidth={64}
      />
      <HomeMainText
        idx={1}
        onMouseEnter={() => setUxuiHovered(true)}
        onMouseLeave={() => setUxuiHovered(false)}
        hovered={digitalHovered || dashboardHovered}
        nowHovered={uxuiHovered}
        width={38}
        mobileWidth={84}
      />
      <SmallText src={creativesrc} alt="creative design svg" $hovered={digitalHovered || dashboardHovered} />
      <HomeMainText
        idx={2}
        onMouseEnter={() => setDigitalHovered(true)}
        onMouseLeave={() => setDigitalHovered(false)}
        hovered={dashboardHovered}
        nowHovered={digitalHovered}
        width={26}
        mobileWidth={46}
      />
      <HomeMainText
        idx={itImgIdx}
        onMouseEnter={() => setDashboardHovered(true)}
        onMouseLeave={() => setDashboardHovered(false)}
        nowHovered={dashboardHovered}
        width={45}
        mobileWidth={67}
      />
      <Container>
        <TextContainer>
          <Text>Marketing</Text>
          <Text>Data Infographics</Text>
        </TextContainer>
        <CircleContainer>
          <Circle src={circlesrc} alt="circle img" />
          <CircleLogo src={contactSrc} alt="circle logo img" />
        </CircleContainer>
      </Container>
      <DownContainer>
        <Down src={downsrc} alt="down icon" />
        <Down src={downsrc} alt="down icon" />
      </DownContainer>
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

  @media (max-width: 480px) {
    margin: 33vw 0;
  }
`;

const SmallText = styled.img<{$hovered: boolean | undefined}>`
  width: 12vw;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? 'translateY(-6vw)' : 'translateY(0)')};
  margin: 0.8vw 0 0.3vw 0;

  @media (max-width: 480px) {
    width: 29vw;
    transform: ${(p) => (p.$hovered ? 'translateY(-16vw)' : 'translateY(0)')};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
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

  @media (max-width: 480px) {
    margin-top: 17vw;

    &::before {
      content: none;
    }
  }
`;

const Text = styled.p`
  font-size: 1.3vw;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5vw;

  &:nth-child(1) {
    margin-top: 3vw;
  }

  @media (max-width: 1280px) {
    font-size: 2.3vw;

    &:nth-child(1) {
      margin-top: 3.5vw;
    }
  }

  @media (max-width: 480px) {
    font-size: 5.5vw;
    margin: 3vw 0;
  }
`;

const CircleContainer = styled.div`
  position: fixed;
  right: 5vw;
  margin: auto 0;
  will-change: transform;
  top: 42vw;
  z-index: 100;

  @media (max-width: 480px) {
    top: 142vw;
  }
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

  @media (max-width: 1280px) {
    width: 8vw;
  }

  @media (max-width: 480px) {
    width: 15vw;
  }
`;

const CircleLogo = styled.img`
  position: absolute;
  width: 4vw;
  left: -6.5%;
  transform: translate(35%, 110%);
  top: 35%;

  @media (max-width: 1280px) {
    width: 5.5vw;
    left: -8%;
  }

  @media (max-width: 480px) {
    width: 10vw;
    top: 29%;
  }
`;

const DownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;

  @media (max-width: 480px) {
    margin-top: 10vw;
  }
`

const DownAnimation = keyframes`
  0% {
    transform: translateY(0);
    filter: brightness(0.5);
  }
  100% {
    transform: translateY(3vw);
    filter: brightness(1);
  }
`;

const Down = styled.img`
  width: 2vw;
  animation: ${DownAnimation} 1.2s infinite alternate;

  @media (max-width: 480px) {
    width: 5vw;
  }
`