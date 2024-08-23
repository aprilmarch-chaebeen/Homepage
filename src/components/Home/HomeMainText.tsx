import styled, {css} from 'styled-components';
import HomeMainTextAnimation from './HomeMainTextAnimation';

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
        {nowHovered && <HomeMainTextAnimation descript={hoverDescriptions[0]} />}
        <BlurText>{title}</BlurText>
      </NonTextContainer>
    </TextContainer>
  );
}

export default HomeMainText;

const TextContainer = styled.div<{$hovered: boolean | undefined}>`
  position: relative;
  transition: transform 0.6s;
  transform: ${(p) => (p.$hovered ? css`translateY(-3rem)` : css`translateY(0)`)};
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
  transform: ${(p) => (p.$hovered ? css`translateY(-3rem)` : css`translateY(0)`)};
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
  left: 50%;
  display: none;
  transition: opacity 0.5s;
  z-index: -1;
  ${TextContainer}:hover & {
    display: block;
  }
`;
