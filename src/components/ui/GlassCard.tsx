import { ReactNode, forwardRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  glow?: boolean;
  padding?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  id?: string;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { children, className = '', strong = false, glow = false, padding = 'p-6', onMouseMove, onMouseLeave, id },
  ref
) {
  return (
    <div
      ref={ref}
      id={id}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${strong ? 'v2-glass-strong' : 'v2-glass'} relative overflow-hidden ${padding} ${
        glow ? 'shadow-glow-accent' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
});

export default GlassCard;
