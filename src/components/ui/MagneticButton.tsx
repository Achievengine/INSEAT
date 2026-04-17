import { useEffect, useRef, ReactNode, ElementType } from 'react';
import { gsap } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  strength?: number;
  radius?: number;
  cursor?: 'hover' | 'view' | 'open';
  cursorText?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

/**
 * Button/link wrapper that magnetically attracts the cursor,
 * translating its own children toward the mouse position.
 */
export default function MagneticButton({
  as,
  href,
  onClick,
  className = '',
  children,
  strength = 0.35,
  radius = 100,
  cursor = 'hover',
  cursorText,
  target,
  rel,
  type = 'button',
  ...rest
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = wrapRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) return;
      gsap.to(inner, {
        x: dx * strength,
        y: dy * strength,
        duration: 0.35,
        ease: 'power3.out',
      });
    };
    const onLeave = () => {
      gsap.to(inner, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [radius, reduced, strength]);

  const Component: ElementType = as ?? (href ? 'a' : 'button');
  const componentProps: Record<string, unknown> = {
    ref: wrapRef,
    className: `inline-block ${className}`,
    'data-cursor': cursor,
    ...(cursorText ? { 'data-cursor-text': cursorText } : {}),
    ...rest,
  };
  if (Component === 'a') {
    componentProps.href = href;
    if (target) componentProps.target = target;
    if (rel) componentProps.rel = rel;
  } else {
    componentProps.type = type;
    componentProps.onClick = onClick;
  }

  return (
    <Component {...componentProps}>
      <span ref={innerRef} className="inline-flex items-center gap-2" style={{ willChange: 'transform' }}>
        {children}
      </span>
    </Component>
  );
}
