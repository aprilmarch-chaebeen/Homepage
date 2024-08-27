import styled, {css} from 'styled-components';
import Marquee from 'react-fast-marquee';

const hoverDescriptions = [
  '당신의 꿈을 담은 브랜드를 만듭니다',
  '모든 순간 모든 곳에서 브랜드 경험을 고민합니다',
  '브랜딩과 마케팅의 시작, 함께 고민하고 지원하겠습니다',
  '공공기관을 누구보다 잘 이해하며 가치있는 디자인 경험을 만들어갑니다',
];

interface HomeMainTextProp {
  title: string;
  idx: number;
  hovered?: boolean;
  nowHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function HomeMainText({title, idx, hovered, nowHovered, onMouseEnter, onMouseLeave}: HomeMainTextProp) {
  return (
    <TextContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} $hovered={hovered}>
      <BigText $hovered={nowHovered}>{title}</BigText>
      <NonTextContainer>
        {nowHovered && (
          <DescriptContainer>
            <Marquee autoFill={true} speed={20} gradient={true} gradientWidth={300}>
              <Descript>{hoverDescriptions[idx]}</Descript>
            </Marquee>
          </DescriptContainer>
        )}
        <BlurText>{title}</BlurText>
      </NonTextContainer>
    </TextContainer>
  );
}

export default HomeMainText;

const TextContainer = styled.div<{$hovered: boolean | undefined}>`
  width: max-content;
  position: relative;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-5vw)` : css`translateY(0)`)};
`;

const NonTextContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  left: 50%;
`;

const BigText = styled.h1<{$hovered: boolean | undefined}>`
  font-family: 'Gotham';
  font-size: 7vw;
  margin: 0;
  line-height: 0.9;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-5vw)` : css`translateY(0)`)};
`;

const BlurText = styled.h1`
  font-family: 'Gotham';
  font-size: 7vw;
  filter: blur(5px);
  color: #999;
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

const DescriptContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 50%);
  width: 90vw;
`;

const Descript = styled.p`
  width: max-content;
  font-family: 'Pretendard-Regular';
  font-size: 0.8vw;
  margin-right: 0.5vw;
`;
