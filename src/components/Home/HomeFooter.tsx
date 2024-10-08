import styled from 'styled-components';
import logosrc from '../../assets/svg/logo_b.svg';
import upwsrc from '../../assets/svg/up_w.svg';
import upbsrc from '../../assets/svg/up_b.svg';
import statuesrc from '../../assets/svg/statue_g.svg';
import {useState} from 'react';

function HomeFooter() {
  const [upHovered, setUpHovered] = useState(false);

  const handleUpClicked = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Footer>
      <InnerContainer>
        <Logo src={logosrc} alt="logo img" />
        <TextContainer>
          <SmallText>바우처</SmallText>
          <SmallLine></SmallLine>
          <SmallText>신규브랜드ㆍ신사업</SmallText>
          <SmallLine></SmallLine>
          <SmallText>공공기관ㆍ대학</SmallText>
          <SmallLine></SmallLine>
          <SmallText>IT 대시보드</SmallText>
          <SmallLine></SmallLine>
          <SmallText>포트폴리오</SmallText>
          <SmallLine></SmallLine>
          <SmallText>About us</SmallText>
        </TextContainer>
      </InnerContainer>
      <Line />
      <InfoContainer>
        <InfoStrong1>상담문의</InfoStrong1>
        <InfoStrong2>T.02-6929-099 &nbsp;&nbsp; E.jjw@aprilmarch.design</InfoStrong2>
        <Info1>CEO Cha yu jeong | Seoul, Songpa-gu, Songpa-Daero 167, TERRA tower building A</Info1>
        <Info3>Copyright Aprilmarch. All rights reserved.</Info3>
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
  padding: 3vw 9vw 5vw 9vw;
  background-color: #f6f6f6;
  position: relative;
  z-index: 0;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 3vw 3vw 5vw 3vw;
  }

  @media (max-width: 480px) {
    padding: 6vw 5vw;
  }
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2d2d2;
  width: 100%;
  height: 0.1vw;
  margin: 1.5vw 0 2vw 0;

  @media (max-width: 1024px) {
    margin: 2vw 0 2.5vw 0;
  }

  @media (max-width: 480px) {
    margin: 4vw 0 7vw 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 5vw;

  @media (max-width: 1280px) {
    width: 8vw;
  }

  @media (max-width: 1024px) {
    width: 9vw;
  }

  @media (max-width: 480px) {
    width: 17vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 0.9vw;
  color: #111;
  margin: 1.3vw 0;

  @media (max-width: 1280px) {
    font-size: 1.2vw;
  }

  @media (max-width: 1024px) {
    font-size: 1.6vw;
  }
`;

const SmallLine = styled.div`
  border-left: 0.1vw solid #111;
  height: 0.8vw;
  margin: 0 1vw;

  @media (max-width: 1024px) {
    height: 1.3vw;
  }
`;

const Up = styled.button`
  width: 4vw;
  height: 4vw;
  background-color: #2c2c2c;
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 60%;
  right: 8%;

  &:hover {
    background-color: #d2ff52;
  }

  @media (max-width: 1280px) {
    width: 5vw;
    height: 5vw;
  }

  @media (max-width: 480px) {
    width: 12vw;
    height: 12vw;
    top: 30%;
  }
`;

const Arrow = styled.img`
  width: 1.3vw;
  position: absolute;
  top: 40%;
  right: 33%;

  @media (max-width: 1280px) {
    width: 1.8vw;
  }

  @media (max-width: 480px) {
    width: 4.5vw;
  }
`;

const Statue = styled.img`
  position: absolute;
  bottom: 0;
  width: 22vw;
  right: 4vw;
  z-index: -1;

  @media (max-width: 1280px) {
    width: 61vw;
    bottom: -25%;
    right: -21%;
  }

  @media (max-width: 1024px) {
    width: 30vw;
    bottom: -15%;
    right: -4%;
  }
`;

const InfoContainer = styled.div`
  text-align: left;
  line-height: 1.8;
`;

const InfoStrong1 = styled.p`
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 1vw;
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 1.5vw;
  }

  @media (max-width: 1024px) {
    font-size: 1.8vw;
  }

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const InfoStrong2 = styled.p`
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 0.9vw;
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 1.3vw;
  }

  @media (max-width: 1024px) {
    font-size: 1.7vw;
  }

  @media (max-width: 480px) {
    font-size: 3.8vw;
  }
`;

const Info1 = styled.p`
  color: #666;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 0.8vw;
  margin: 0;
  margin-bottom: 1.5vw;

  @media (max-width: 1280px) {
    font-size: 1.2vw;
  }

  @media (max-width: 1024px) {
    font-size: 1.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
    width: 84vw;
  }
`;

const Info3 = styled.p`
  color: #666;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 0.7vw;
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 1vw;
  }

  @media (max-width: 1024px) {
    font-size: 1.2vw;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
