import styled, {css} from 'styled-components';
import Marquee from 'react-fast-marquee';
import starsrc from '../../assets/svg/samll_star.svg';
import brandingsrc from '../../assets/svg/branding.svg';
import uxuisrc from '../../assets/svg/uxui.svg';
import digitalsrc from '../../assets/svg/digital.svg';
import itsrc from '../../assets/svg/it_dashboard.svg';
import brandinghsrc from '../../assets/svg/branding_h.svg';
import uxuihsrc from '../../assets/svg/uxui_h.svg';
import digitalhsrc from '../../assets/svg/digital_h.svg';
import ithsrc from '../../assets/svg/it_dashboard_h.svg';
import brandingbsrc from '../../assets/svg/branding_b.svg';
import uxuibsrc from '../../assets/svg/uxui_b.svg';
import digitalbsrc from '../../assets/svg/digital_b.svg';
import itbsrc from '../../assets/svg/it_dashboard_b.svg';

const hoverDescriptions = [
  '당신의 꿈을 담은 브랜드를 만듭니다',
  '모든 순간 모든 곳에서 브랜드 경험을 고민합니다',
  '브랜딩과 마케팅의 시작, 함께 고민하고 지원하겠습니다',
  '공공기관을 누구보다 잘 이해하며 가치있는 디자인 경험을 만들어갑니다',
];

const textImgs = [brandingsrc, uxuisrc, digitalsrc, itsrc];

const hoverTextImgs = [brandinghsrc, uxuihsrc, digitalhsrc, ithsrc];

const blurTextImgs = [brandingbsrc, uxuibsrc, digitalbsrc, itbsrc];

interface HomeMainTextProp {
  idx: number;
  hovered?: boolean;
  nowHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  width: number;
}

function HomeMainText({idx, hovered, nowHovered, onMouseEnter, onMouseLeave, width}: HomeMainTextProp) {
  return (
    <TextContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} $hovered={hovered}>
      {nowHovered ? (
        <BigText src={hoverTextImgs[idx]} alt="hovered text img" $hovered={nowHovered} $width={width} />
      ) : (
        <BigText src={textImgs[idx]} alt="text img" $hovered={nowHovered} $width={width} />
      )}
      <NonTextContainer>
        {nowHovered && (
          <DescriptContainer>
            <Marquee autoFill={true} speed={20} gradient={true} gradientWidth={300}>
              <Descript>{hoverDescriptions[idx]}</Descript>
              <Star src={starsrc} alt="star src" />
            </Marquee>
          </DescriptContainer>
        )}
        <BlurText src={blurTextImgs[idx]} alt="blur text img" $width={width} />
      </NonTextContainer>
    </TextContainer>
  );
}

export default HomeMainText;

const DescriptContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 90%);
  width: 90vw;
`;

const TextContainer = styled.div<{$hovered: boolean | undefined}>`
  width: max-content;
  position: relative;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-5vw)` : css`translateY(0)`)};

  &:nth-child(4) {
    margin: 1vw 0;
  }

  &:nth-child(4) ${DescriptContainer} {
    transform: translate(-50%, 120%);
  }

  &:nth-child(5) ${DescriptContainer} {
    transform: translate(-50%, 70%);
  }
`;

const NonTextContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  left: 50%;
`;

const BigText = styled.img<{$hovered: boolean | undefined; $width: number}>`
  width: ${(p) => p.$width}vw;
  margin: 0;
  line-height: 0.9;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-5vw)` : css`translateY(0)`)};
`;

const BlurText = styled.img<{$width: number}>`
  width: ${(p) => p.$width}vw;
  filter: blur(3px);
  margin: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  ${TextContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transition:
      opacity 1s ease-in-out,
      visibility 1s ease-in-out;
  }
`;

const Descript = styled.p`
  width: max-content;
  font-family: 'Pretendard-Regular';
  font-size: 0.8vw;
  margin-right: 0.5vw;
`;

const Star = styled.img`
  width: 1vw;
  margin: 0 1vw;
`;
