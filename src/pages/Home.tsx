import HomeMain from '../components/Home/HomeMain';
import styled from 'styled-components';
// import WhatWeDo from '../components/Home/WhatWeDo';
// import Customers from '../components/Home/Customers';
// import HowItWorks from '../components/Home/HowItWorks';
// import HomeExpertise from '../components/Home/HomeExpertise';
// import HomeJourney from '../components/Home/HomeJourney';
// import HomeFooter from '../components/Home/HomeFooter';
// import FlowText from '../components/Home/FlowText';
// import HomeField from '../components/Home/HomeField';
// import HomeJoy from '../components/Home/HomeJoy';
import React, {Suspense} from 'react';

const WhatWeDo = React.lazy(() => import('../components/Home/WhatWeDo'));
const Customers = React.lazy(() => import('../components/Home/Customers'));
const HowItWorks = React.lazy(() => import('../components/Home/HowItWorks'));
const HomeExpertise = React.lazy(() => import('../components/Home/HomeExpertise'));
const HomeJourney = React.lazy(() => import('../components/Home/HomeJourney'));
const HomeFooter = React.lazy(() => import('../components/Home/HomeFooter'));
const FlowText = React.lazy(() => import('../components/Home/FlowText'));
const HomeField = React.lazy(() => import('../components/Home/HomeField'));
const HomeJoy = React.lazy(() => import('../components/Home/HomeJoy'));

function Home() {
  return (
    <HomeSection>
      <HomeMain />
      <Suspense>
        <WhatWeDo />
        <Customers />
        <HowItWorks />
        <FlowText />
        <HomeField />
        <HomeJoy />
        <HomeExpertise />
        <HomeJourney />
        <HomeFooter />
      </Suspense>
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled.section`
  text-align: center;
  position: relative;
`;
