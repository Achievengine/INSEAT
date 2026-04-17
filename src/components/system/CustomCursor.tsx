import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Custom cursor: dot + lerping follower ring.
 * - Dot moves 1:1 with pointer and uses mix-blend difference.
 * - Ring lerps toward the pointer (0.12 factor).
 * - Reads data-cursor="hover|view|open" from hovered ancestors to morph.
 */
export default function CustomCursor() {
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.documentElement.classList.add('v2-cursor-active');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let currentVariant = '';
    let currentText = '';

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0)`;
      }

      // Walk up the tree to find a data-cursor attr
      const el = (e.target as HTMLElement | null)?.closest('[data-cursor]') as HTMLElement | null;
      const nextVariant = el?.dataset.cursor || '';
      const nextText = el?.dataset.cursorText || '';
      if (nextVariant !== currentVariant && ringRef.current) {
        currentVariant = nextVariant;
        if (nextVariant) ringRef.current.setAttribute('data-variant', nextVariant);
        else ringRef.current.removeAttribute('data-variant');
      }
      if (nextText !== currentText && ringRef.current) {
        currentText = nextText;
        ringRef.current.textContent = nextText || '';
      }
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    let rafId = 0;
    const loop = () => {
      ringX += (targetX - ringX) * 0.14;
      ringY += (targetY - ringY) * 0.14;
      if (ringRef.current) {
        const size = ringRef.current.offsetWidth || 36;
        ringRef.current.style.transform = `translate3d(${ringX - size / 2}px, ${ringY - size / 2}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.documentElement.classList.remove('v2-cursor-active');
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div ref={dotRef} className="v2-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="v2-cursor-ring" aria-hidden="true" />
    </>
  );
}
