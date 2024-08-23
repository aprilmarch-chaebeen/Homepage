import HomeCounsel from '../components/Home/HomeCounsel';
import HomeMain from '../components/Home/HomeMain';
import styled from 'styled-components';
import WhatWeDo from '../components/Home/WhatWeDo';

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
