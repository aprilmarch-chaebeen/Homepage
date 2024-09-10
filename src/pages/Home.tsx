import HomeMain from '../components/Home/HomeMain';
import styled from 'styled-components';
import WhatWeDo from '../components/Home/WhatWeDo';
import Customers from '../components/Home/Customers';
import HowItWorks from '../components/Home/HowItWorks';
import HomeExpertise from '../components/Home/HomeExpertise';
import HomeJourney from '../components/Home/HomeJourney';
import HomeFooter from '../components/Home/HomeFooter';
import FlowText from '../components/Home/FlowText';
import HomeField from '../components/Home/HomeField';
import HomeJoy from '../components/Home/HomeJoy';

function Home() {
  return (
    <HomeSection>
      <HomeMain />
      <WhatWeDo />
      <Customers />
      <HowItWorks />
      <FlowText />
      <HomeField />
      <HomeJoy />
      <HomeExpertise />
      <HomeJourney />
      <HomeFooter />
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled.section`
  text-align: center;
  position: relative;
`;
