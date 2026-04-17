import { useEffect, useRef, ReactNode, createElement } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealTextProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Delay before the reveal animation starts, in seconds. */
  delay?: number;
  /** When true, animates on mount rather than on scroll. */
  immediate?: boolean;
  stagger?: number;
}

/**
 * Splits the child text into words wrapped in <span> groups,
 * each inside a clip-path mask. Lines slide up into view from below
 * like a page of film unrolling.
 *
 * Falls back gracefully when reduced-motion is preferred.
 */
export default function RevealText({
  children,
  as = 'span',
  className = '',
  delay = 0,
  immediate = false,
  stagger = 0.06,
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) {
      gsap.set(ref.current.querySelectorAll('.reveal-word'), { y: 0, opacity: 1 });
      return;
    }

    const words = ref.current.querySelectorAll('.reveal-word');
    if (!words.length) return;

    gsap.set(words, { yPercent: 110, opacity: 0 });

    const to = {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger,
      delay,
    };

    if (immediate) {
      gsap.to(words, to);
      return;
    }

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(words, to);
      },
    });

    return () => {
      st.kill();
    };
  }, [delay, immediate, reduced, stagger]);

  // Walk children and split strings into word spans; preserve other nodes (e.g. <span className="v2-gradient-text">)
  const renderNode = (node: ReactNode, keyPrefix: string): ReactNode => {
    if (typeof node === 'string' || typeof node === 'number') {
      return String(node)
        .split(/(\s+)/)
        .map((chunk, i) => {
          if (/^\s+$/.test(chunk)) return chunk;
          if (chunk === '') return null;
          return (
            <span
              key={`${keyPrefix}-${i}`}
              className="inline-block overflow-hidden align-baseline"
              style={{ verticalAlign: 'baseline' }}
            >
              <span className="reveal-word inline-block" style={{ willChange: 'transform, opacity' }}>
                {chunk}
              </span>
            </span>
          );
        });
    }
    if (Array.isArray(node)) {
      return node.map((n, i) => <span key={`${keyPrefix}-g-${i}`}>{renderNode(n, `${keyPrefix}-${i}`)}</span>);
    }
    // React element — recursively split its children
    if (node && typeof node === 'object' && 'props' in (node as any)) {
      const el = node as any;
      return createElement(
        el.type,
        { ...el.props, key: el.key ?? keyPrefix },
        renderNode(el.props.children, `${keyPrefix}-x`)
      );
    }
    return node;
  };

  return createElement(
    as as any,
    { ref: ref as any, className },
    renderNode(children, 'r')
  );
}
