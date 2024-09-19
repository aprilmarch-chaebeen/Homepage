import {useLayoutEffect, useState} from 'react';
import cursorsrc from '../assets/svg/cursor.svg';
import stalker1src from '../assets/svg/stalker1.svg';
import stalekr2src from '../assets/svg/stalker2.svg';
import styled from 'styled-components';

interface MouseStalkerProps {
  containerRef: React.RefObject<HTMLElement>;
}

function MouseStalker({containerRef}: MouseStalkerProps) {
  const [positions, setPositions] = useState({x: 0, y: 0});

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    console.log(container);

    const onMove = ({clientX, clientY}: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left + 2;
      const y = clientY - rect.top + 2;

      setPositions({x, y});
      console.log(x, y);
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mousedown', onMove);
    container.addEventListener('mouseup', onMove);
    container.addEventListener('mouseout', onMove);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mousedown', onMove);
      container.removeEventListener('mouseup', onMove);
      container.removeEventListener('mouseout', onMove);
    };
  }, [containerRef]);

  return (
    <div>
      <Circle src={cursorsrc} $delay={0} $size={35} x={positions.x} y={positions.y} />
      <Circle src={stalker1src} $delay={0.09} x={positions.x} y={positions.y} />
      <Circle src={stalekr2src} $delay={0.09} x={positions.x} y={positions.y} />
    </div>
  );
}

export default MouseStalker;

interface CircleProps {
  src: string;
  $size?: number;
  $delay: number;
  x: number;
  y: number;
}

const Circle = styled.img.attrs<CircleProps>(({x, y}) => ({
  style: {
    transform: `translate(${x}px, ${y}px)`,
  },
}))<CircleProps>`
  position: absolute;
  z-index: 1000;
  width: ${(p) => (p.$size ? p.$size : 25)}px;
  height: ${(p) => (p.$size ? p.$size : 25)}px;
  transition: transform 0.2s ease ${(p) => p.$delay}s;
`;
