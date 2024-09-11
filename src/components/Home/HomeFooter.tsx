import styled from 'styled-components';
import circlebsrc from '../../assets/svg/circle_b.svg';
import logosrc from '../../assets/svg/logo_b.svg';
import upwsrc from '../../assets/svg/up_w.svg';
import upbsrc from '../../assets/svg/up_b.svg';
import statuesrc from '../../assets/svg/statue_g.svg';
import {useState} from 'react';
import Marquee from 'react-fast-marquee';
import emailsrc from '../../assets/svg/e-mail.svg';

function HomeFooter() {
  const [upHovered, setUpHovered] = useState(false);

  const handleUpClicked = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Footer>
      <Circle src={circlebsrc} alt="blue circle" />
      <Line />
      <OuterContainer>
        <InnerContainer $width={65}>
          <Logo src={logosrc} alt="logo img" />
          <div>
            <Contact>CONTACT US</Contact>
          </div>
        </InnerContainer>
        <InnerContainer $width={35}>
          <SmallText>바우처</SmallText>
          <SmallText>신규브랜드ㆍ신사업</SmallText>
          <SmallText>공공기관ㆍ대학</SmallText>
          <SmallText>IT 대시보드</SmallText>
          <SmallText>포트폴리오</SmallText>
          <SmallText>About us</SmallText>
        </InnerContainer>
      </OuterContainer>
      <MarqueeContainer>
        <Marquee autoFill={true} speed={20}>
          <EmailImg src={emailsrc} alt="email img" />
        </Marquee>
      </MarqueeContainer>
      <InfoContainer>
        <Info>T.02-6929-0990</Info>
        <Info>E.cyj@aprilmarch.design</Info>
        <Info>Seoul, Songpa-gu, Songpa-Daero 167, TERRA tower building A</Info>
      </InfoContainer>
      <Up onMouseEnter={() => setUpHovered(true)} onMouseLeave={() => setUpHovered(false)} onClick={handleUpClicked}>
        {upHovered ? <Arrow src={upbsrc} alt="up black" /> : <Arrow src={upwsrc} alt="up white" />}
      </Up>
      <Statue src={statuesrc} alt="statue img" />
    </Footer>
  );
}

export default HomeFooter;

const Footer = styled.footer`
  padding: 2vw 4vw;
  background-color: #f6f6f6;
  position: relative;
  height: 40vw;
  z-index: 0;
`;

const Circle = styled.img`
  width: 1.9vw;
  height: 1.9vw;
  display: flex;
  margin-left: 1vw;
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2d2d2;
  width: 100%;
  height: 0.1vw;
`;

const OuterContainer = styled.div`
  display: flex;
  padding: 4vw 0;
`;

const InnerContainer = styled.div<{$width: number}>`
  text-align: left;
  width: ${(p) => p.$width}%;
`;

const Logo = styled.img`
  width: 7vw;
  margin-bottom: 5vw;
`;

const Contact = styled.button`
  background-color: #1c46f5;
  color: #fff;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.1vw;
  border: none;
  width: 13.5vw;
  height: 3.6vw;
  border-radius: 30vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Medium';
  font-size: 1.1vw;
  color: #222;
`;

const Up = styled.button`
  width: 3.8vw;
  height: 3.8vw;
  background-color: #2c2c2c;
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 47%;
  right: 8%;

  &:hover {
    background-color: #d2ff52;
  }
`;

const Arrow = styled.img`
  width: 1.3vw;
  position: absolute;
  top: 40%;
  right: 33%;
`;

const Statue = styled.img`
  position: absolute;
  bottom: 0;
  width: 30vw;
  right: 0;
  z-index: -1;
`;

const MarqueeContainer = styled.div`
  position: absolute;
  bottom: 11%;
  z-index: 1;
  left: 0;
`;

const EmailImg = styled.img`
  height: 10vw;
  margin-right: 3vw;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11vw;
`;

const Info = styled.p`
  color: #444;
  font-family: 'Gotham-Book';
  font-size: 1vw;
`;
