import identitysrc from '../../assets/svg/identity_1.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web_build.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video.svg';
import digitalsrc from '../../assets/svg/marketing.svg';
import styled from 'styled-components';

function BallAnimation() {
  return (
    <BallContainer>
      <Ball src={uxsrc} alt="ux ball" $top={5} $left={51} />
      <Ball src={identitysrc} alt="identity ball" $top={20} $left={17} />
      <Ball src={trendsrc} alt="trend & insights ball" $top={27} $left={33} />
      <Ball src={videosrc} alt="video production ball" $top={24} $left={60} />
      <Ball src={digitalsrc} alt="digital marketing ball" $top={43} $left={70} />
      <Ball src={websrc} alt="web build ball" $top={49} $left={43} />
      <Ball src={besrc} alt="be ball" $top={60} $left={18} />
      <Ball src={designsrc} alt="creative design ball" $top={62} $left={60} />
    </BallContainer>
  );
}

export default BallAnimation;

const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 7vw;
  position: relative;
`;

const Ball = styled.img<{$top: number; $left: number}>`
  width: 14vw;
  position: absolute;
  top: ${(p) => p.$top}vw;
  left: ${(p) => p.$left}vw;
`;
