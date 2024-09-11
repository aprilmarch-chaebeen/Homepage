import identitysrc from '../../assets/svg/identity_1.svg';
import besrc from '../../assets/svg/brand_experience.svg';
import trendsrc from '../../assets/svg/trend_insight.svg';
import websrc from '../../assets/svg/web_build.svg';
import uxsrc from '../../assets/svg/ux.svg';
import designsrc from '../../assets/svg/creative_design.svg';
import videosrc from '../../assets/svg/video.svg';
import digitalsrc from '../../assets/svg/marketing.svg';
import styled, {keyframes} from 'styled-components';

function BallAnimation() {
  return (
    <BallContainer>
      <Ball src={uxsrc} alt="ux ball" $top={5} $left={51} $duration={1.25} $reverse="alternate" />
      <Ball src={identitysrc} alt="identity ball" $top={20} $left={17} $duration={2.75} $reverse="alternate-reverse" />
      <Ball src={trendsrc} alt="trend & insights ball" $top={27} $left={33} $duration={2.05} $reverse="alternate" />
      <Ball src={videosrc} alt="video production ball" $top={24} $left={60} $duration={1.75} $reverse="alternate-reverse" />
      <Ball src={digitalsrc} alt="digital marketing ball" $top={43} $left={70} $duration={2.15} $reverse="alternate" />
      <Ball src={websrc} alt="web build ball" $top={49} $left={43} $duration={1.95} $reverse="alternate-reverse" />
      <Ball src={besrc} alt="be ball" $top={60} $left={18} $duration={2.25} $reverse="alternate" />
      <Ball src={designsrc} alt="creative design ball" $top={62} $left={60} $duration={1.75} $reverse="alternate-reverse" />
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

const Animation = keyframes`
  0%{
    transform: translateY(12%);
  }
  100% {
    transform: translateY(-12%);
  }
`;

const Ball = styled.img<{$top: number; $left: number; $duration: number; $reverse: string}>`
  width: 14vw;
  position: absolute;
  top: ${(p) => p.$top}vw;
  left: ${(p) => p.$left}vw;
  animation: ${Animation} ease-in-out ${(p) => p.$duration}s infinite ${(p) => p.$reverse};
`;
