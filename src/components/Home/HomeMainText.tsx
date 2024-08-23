import styled, {css, keyframes} from 'styled-components';
import Marquee from 'react-fast-marquee';

const hoverDescriptions = [
  '우리는 마음속에 기억되는 강렬한 브랜드를 만듭니다',
  '우리는 마음속에 기억되는 강렬한 브랜드를 만듭니다',
  '우리는 마음속에 기억되는 강렬한 브랜드를 만듭니다',
  '우리는 마음속에 기억되는 강렬한 브랜드를 만듭니다',
];

interface HomeMainTextProp {
  title: string;
  hovered?: boolean;
  nowHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function HomeMainText({title, hovered, nowHovered, onMouseEnter, onMouseLeave}: HomeMainTextProp) {
  return (
    <TextContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} $hovered={hovered}>
      <BigText $hovered={nowHovered}>{title}</BigText>
      <NonTextContainer>
        {nowHovered && (
          <DescriptContainer>
            <Marquee gradient={true} autoFill={true}>
              <Descript>{hoverDescriptions[0]}</Descript>
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
  transform: ${(p) => (p.$hovered ? css`translateY(-7.5vw)` : css`translateY(0)`)};
`;

const NonTextContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  left: 50%;
`;

const BigText = styled.h1<{$hovered: boolean | undefined}>`
  font-family: 'Gotham';
  font-size: 7.5vw;
  margin: 0;
  line-height: 0.9;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-7.5vw)` : css`translateY(0)`)};
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BlurText = styled.h1`
  font-family: 'Gotham';
  font-size: 7.5vw;
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
  transition:
    opacity 0.3s ease-in-out 0.1s,
    visibility 0.3s ease-in-out;
  animation: ${FadeIn} 0.2s;
  ${TextContainer}:hover & {
    opacity: 1;
    visibility: visible;
    animation: ${FadeIn} 0.3s ease-in-out;
  }
`;

const DescriptContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 50%);
`;

const Descript = styled.p`
  width: max-content;
  font-family: 'Pretendard-Regular';
  font-size: 1.1vw;
  margin-right: 0.5rem;
`;
