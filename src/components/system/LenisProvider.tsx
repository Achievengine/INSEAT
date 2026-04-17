import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  children: React.ReactNode;
}

/**
 * Wraps content with Lenis momentum scroll.
 * - Disables on touch / coarse pointer devices (better native feel).
 * - Disables for prefers-reduced-motion users.
 * - Wires Lenis into GSAP ticker so ScrollTrigger stays in sync.
 */
export default function LenisProvider({ children }: Props) {
  const reduced = useReducedMotion();

  useEffect(() => {
    // Skip Lenis for reduced-motion or touch devices
    if (reduced) return;
    if (typeof window === 'undefined') return;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse) return;

    const lenis = new Lenis({
      duration: 1.2,
      // easeOutQuart
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', onScroll);

    const tick = (time: number) => {
      // Lenis expects ms; gsap passes seconds.
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Handle in-page anchor clicks smoothly through Lenis
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
