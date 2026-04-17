import { ReactNode } from 'react';

interface MarqueeRowProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  gap?: number;
}

export default function MarqueeRow({
  children,
  direction = 'left',
  speed = 40,
  className = '',
  gap = 48,
}: MarqueeRowProps) {
  const duration = `${speed}s`;
  const anim = direction === 'left' ? 'v2-marquee-left' : 'v2-marquee-right';

  return (
    <div className={`v2-edge-fade overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${anim}`}
        style={{
          gap: `${gap}px`,
          animationDuration: duration,
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>{children}</div>
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }} aria-hidden="true">{children}</div>
      </div>
      <style>{`
        @keyframes v2MarqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes v2MarqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .v2-marquee-left { animation-name: v2MarqueeLeft; animation-iteration-count: infinite; animation-timing-function: linear; }
        .v2-marquee-right { animation-name: v2MarqueeRight; animation-iteration-count: infinite; animation-timing-function: linear; }
        @media (prefers-reduced-motion: reduce) {
          .v2-marquee-left, .v2-marquee-right { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
