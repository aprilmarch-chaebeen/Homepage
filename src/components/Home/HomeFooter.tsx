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
        <InfoStrong2>T.02-6929-099</InfoStrong2>
        <InfoStrong2>E.cyj@aprilmarch.design</InfoStrong2>
        <Info1>대표 차유정 | 주소 123456 서울특별시 송파구 송파대로 167, 테라타워 Aehd</Info1>
        <Info1>통신판매업 신고 1234-1234-1234 | 사업자등록번호 123-456-7890</Info1>
        <Info2>Copyright Aprilmarch. All rights reserved.</Info2>
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
`;

const Line = styled.hr`
  border: 0;
  background-color: #d2d2d2;
  width: 100%;
  height: 0.1vw;
  margin: 1.5vw 0 2vw 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 7vw;

  @media (min-width: 1280px) {
    width: 8vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Bold';
  font-size: 1.1vw;
  color: #111;
  margin: 1.3vw 0;

  @media (min-width: 1280px) {
    font-size: 1.2vw;
  }
`;

const SmallLine = styled.div`
  border-left: 0.1vw solid #111;
  height: 1vw;
  margin: 0 1.5vw;
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

  @media (min-width: 1280px) {
    width: 5vw;
    height: 5vw;
  }
`;

const Arrow = styled.img`
  width: 1.3vw;
  position: absolute;
  top: 40%;
  right: 33%;

  @media (min-width: 1280px) {
    width: 1.8vw;
  }
`;

const Statue = styled.img`
  position: absolute;
  bottom: 0;
  width: 22vw;
  right: 4vw;
  z-index: -1;
`;

const InfoContainer = styled.div`
  text-align: left;
  line-height: 1.8;
`;

const InfoStrong1 = styled.p`
  color: #333;
  font-family: 'NotoSansKR';
  font-weight: 600;
  font-size: 1.3vw;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 1.5vw;
  }
`;

const InfoStrong2 = styled.p`
  color: #333;
  font-family: 'NotoSansKR';
  font-weight: 600;
  font-size: 1.1vw;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 1.3vw;
  }
`;

const Info1 = styled.p`
  color: #666;
  font-family: 'NotoSansKR';
  font-weight: 400;
  font-size: 1vw;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 1.2vw;
  }
`;

const Info2 = styled.p`
  color: #666;
  font-family: 'Pretendard-Regular';
  font-size: 0.9vw;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 1vw;
  }
`;
