import HomeCounsel from '../components/Home/HomeCounsel';
import HomeMain from '../components/Home/HomeMain';
import styled from 'styled-components';
import WhatWeDo from '../components/Home/WhatWeDo';
import Customers from '../components/Home/Customers';
import HowItWorks from '../components/Home/HowItWorks';
import HomeContact from '../components/Home/HomeContact';
import HomeLook from '../components/Home/HomeLook';
import HomeExpertise from '../components/Home/HomeExpertise';
import HomeJourney from '../components/Home/HomeJourney';
import HomeAbout from '../components/Home/HomeAbout';

function Home() {
  return (
    <HomeSection>
      <HomeMain />
      <CounselContainer>
        <HomeCounsel organ={'바우처 상담'} />
        <HomeCounsel organ={'강소기업 상담'} />
        <HomeCounsel organ={'공공기관 상담'} />
      </CounselContainer>
      <WhatWeDo />
      <Customers />
      <HowItWorks />
      <HomeContact />
      <HomeLook />
      <HomeExpertise />
      <HomeJourney />
      <HomeAbout />
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled.section`
  text-align: center;
  position: relative;
`;

const CounselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
`;
