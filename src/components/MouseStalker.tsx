import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import stalker1src from '../assets/svg/stalker1.svg';
import stalekr2src from '../assets/svg/stalker2.svg';
import gsap from 'gsap';

interface Circleprops {
  src: string;
  delay: number;
}

interface CircleHandle {
  moveTo: (x: number, y: number) => void;
}

interface MouseStalkerProps {
  containerRef: React.RefObject<HTMLElement>;
}

const Circle = forwardRef<CircleHandle, Circleprops>(({src, delay}, ref) => {
  const el = useRef<HTMLImageElement>(null);
  useImperativeHandle(ref, () => {
    return {
      moveTo(x, y) {
        if (el.current) {
          gsap.to(el.current, {x, y, delay});
        }
      },
    };
  }, [delay]);

  return <img src={src} alt="mouse stalker" ref={el} style={{position: 'absolute', zIndex: '1000'}} />;
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
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      circlesRef.current.forEach((ref) => ref.moveTo(x, y));
    };

    container.addEventListener('pointermove', onMove);

    return () => container.removeEventListener('pointermove', onMove);
  }, [containerRef]);

  const addCircleRef = (ref: CircleHandle | null) => {
    if (ref) {
      circlesRef.current.push(ref);
    }
  };

  return (
    <div>
      <Circle ref={addCircleRef} src={stalker1src} delay={0.1} />
      <Circle ref={addCircleRef} src={stalekr2src} delay={0.2} />
    </div>
  );
}

export default MouseStalker;
