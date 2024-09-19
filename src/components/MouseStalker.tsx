import {forwardRef, useImperativeHandle, useEffect, useRef} from 'react';
import cursorsrc from '../assets/svg/cursor.svg';
import stalker1src from '../assets/svg/stalker1.svg';
import stalekr2src from '../assets/svg/stalker2.svg';

interface Circleprops {
  src: string;
  delay: number;
  size?: number;
}

interface CircleHandle {
  moveTo: (x: number, y: number) => void;
}

interface MouseStalkerProps {
  containerRef: React.RefObject<HTMLElement>;
}

const Circle = forwardRef<CircleHandle, Circleprops>(({src, delay, size}, ref) => {
  const el = useRef<HTMLImageElement>(null);
  useImperativeHandle(ref, () => {
    return {
      moveTo(x, y) {
        if (el.current) {
          setTimeout(() => {
            el.current!.style.transform = `translate(${x}px, ${y}px)`;
          }, delay * 1000);
        }
      },
    };
  }, [delay]);

  return (
    <img
      src={src}
      alt="mouse stalker"
      ref={el}
      style={{position: 'absolute', zIndex: '1000', width: `${size}px`, height: `${size}px`, transition: 'transform 0.2s ease'}}
    />
  );
});

function MouseStalker({containerRef}: MouseStalkerProps) {
  const circlesRef = useRef<CircleHandle[]>([]);

  circlesRef.current = [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {width, height} = container.getBoundingClientRect();
    circlesRef.current.forEach((ref) => ref.moveTo(width / 2, height / 2));

    const onMove = ({clientX, clientY}: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left + 2;
      const y = clientY - rect.top + 2;

      circlesRef.current.forEach((ref) => ref.moveTo(x, y));
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

  const addCircleRef = (ref: CircleHandle | null) => {
    if (ref) {
      circlesRef.current.push(ref);
    }
  };

  return (
    <div>
      <Circle ref={addCircleRef} src={cursorsrc} delay={0} size={35} />
      <Circle ref={addCircleRef} src={stalker1src} delay={0.1} />
      <Circle ref={addCircleRef} src={stalekr2src} delay={0.2} />
    </div>
  );
}

export default MouseStalker;
