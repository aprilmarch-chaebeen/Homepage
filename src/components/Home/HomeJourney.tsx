import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import identitysrc from '../../assets/svg/Identity.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video_production.svg';

function HomeJourney() {
  return (
    <JourneySection>
      <BigText>Work Journey Map.</BigText>
      <Marquee autoFill={true} direction="right" speed={20}>
        <WorkImg src={identitysrc} alt="identity" />
        <WorkImg src={besrc} alt="be" />
        <WorkImg src={trendsrc} alt="trend" />
        <WorkImg src={websrc} alt="web" />
        <WorkImg src={uxsrc} alt="ux" />
        <WorkImg src={designsrc} alt="design" />
        <WorkImg src={videosrc} alt="video" />
      </Marquee>
    </JourneySection>
  );
}

export default HomeJourney;

const JourneySection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 16vw 0;
`;

const BigText = styled.h3`
  font-family: 'Gotham';
  margin: 0;
  text-align: left;
  margin-left: 7vw;
  margin-bottom: 5vw;
  font-size: 3.4vw;
`;

const WorkImg = styled.img`
  margin-right: 24px;
  width: 16vw;
`;
