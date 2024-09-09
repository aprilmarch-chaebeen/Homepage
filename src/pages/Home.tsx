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
import HomeFooter from '../components/Home/HomeFooter';

function Home() {
  return (
    <HomeSection>
      <HomeMain />
      <WhatWeDo />
      <Customers />
      <HowItWorks />
      <HomeContact />
      <HomeLook />
      <HomeExpertise />
      <HomeJourney />
      <HomeAbout />
      <HomeFooter />
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled.section`
  text-align: center;
  position: relative;
`;
