import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NumberCounterProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  immediate?: boolean;
  className?: string;
  delay?: number;
  shimmer?: boolean;
}

export default function NumberCounter({
  to,
  from = 0,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  format,
  immediate = false,
  className = '',
  delay = 0,
  shimmer = true,
}: NumberCounterProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shimmerActive, setShimmerActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;

    const render = (val: number) => {
      if (!target) return;
      const str = format ? format(val) : val.toFixed(decimals);
      target.textContent = `${prefix}${str}${suffix}`;
    };

    if (reduced) {
      render(to);
      return;
    }

    const obj = { val: from };
    render(from);

    const run = () => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: 'power3.out',
        delay,
        onUpdate: () => render(obj.val),
        onComplete: () => {
          if (shimmer) {
            setShimmerActive(true);
            setTimeout(() => setShimmerActive(false), 2600);
          }
        },
      });
    };

    if (immediate) {
      run();
      return;
    }

    const st = ScrollTrigger.create({
      trigger: target,
      start: 'top 88%',
      once: true,
      onEnter: run,
    });

    return () => {
      st.kill();
    };
  }, [to, from, duration, decimals, prefix, suffix, format, immediate, reduced, delay, shimmer]);

  return (
    <span
      ref={ref}
      className={`${shimmerActive ? 'v2-shimmer' : ''} ${className}`}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}
