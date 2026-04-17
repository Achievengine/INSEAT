import { useState } from 'react';
import RevealText from '../ui/RevealText';

const nodes = [
  { key: 'pos', label: 'POS', desc: 'Fast, flexible, offline-ready ordering.' },
  { key: 'qr', label: 'QR Order', desc: 'Guests scan, order, pay from the table.' },
  { key: 'kds', label: 'KDS', desc: 'Tickets routed by prep station in real time.' },
  { key: 'res', label: 'Reservations', desc: 'Waitlist, floor plan, no-show rules.' },
  { key: 'menu', label: 'Menu', desc: 'AI OCR import, 86ing, dynamic pricing.' },
  { key: 'loyalty', label: 'Loyalty', desc: 'Tiers, points, targeted offers.' },
  { key: 'staff', label: 'Staff', desc: 'Shifts, roles, performance on the glass.' },
  { key: 'analytics', label: 'Analytics', desc: 'Every metric your GM checks at 8am.' },
];

export default function PlatformNodeDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const radius = 160;
  const radiusMd = 200;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.5), transparent 70%)' }}
        />
      </div>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="v2-chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Connected by design
          </div>
          <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            <span className="text-foreground">Every tool. Every outlet. </span>
            <span className="v2-gradient-text">One brain.</span>
          </RevealText>
          <RevealText as="p" className="mt-5 text-lg text-muted" delay={0.3}>
            Data flows in one loop, not seven integrations. Changes in one module reflect in every
            other in under a second.
          </RevealText>
        </div>

        <div className="relative mx-auto aspect-square max-w-[560px] md:max-w-[680px]">
          {/* Outer ring */}
          <div
            className={`absolute inset-0 ${active ? '' : 'animate-orbit'} will-change-transform`}
            style={{ animationDuration: '80s' }}
          >
            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const xPct = 50 + Math.cos(angle) * 42;
              const yPct = 50 + Math.sin(angle) * 42;
              const isActive = active === n.key;
              return (
                <button
                  key={n.key}
                  type="button"
                  onMouseEnter={() => setActive(n.key)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(n.key)}
                  onBlur={() => setActive(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 ${active ? '' : 'animate-orbit-reverse'} will-change-transform transition-all duration-500`}
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    animationDuration: '80s',
                  }}
                  data-cursor="hover"
                  aria-label={n.label}
                >
                  <div
                    className={`v2-glass-strong rounded-2xl px-4 py-3 border transition-all duration-500 ${
                      isActive
                        ? 'border-accent/60 shadow-glow-accent'
                        : 'border-hairline hover:border-accent/40'
                    }`}
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-dim">{`0${i + 1}`}</div>
                    <div className="text-sm font-semibold text-foreground">{n.label}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SVG lines */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="nodeLine" x1="0" x2="1">
                <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00E5C4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + Math.cos(angle) * 168;
              const y = 200 + Math.sin(angle) * 168;
              const isActive = active === n.key;
              return (
                <g key={n.key}>
                  <line
                    x1="200" y1="200" x2={x} y2={y}
                    stroke={isActive ? 'url(#nodeLine)' : 'rgba(255,255,255,0.06)'}
                    strokeWidth={isActive ? 1.2 : 0.6}
                  />
                  <circle
                    cx={x} cy={y} r="1.8"
                    fill="#00E5C4"
                    style={{
                      animation: `nodeDot${i} ${5 + i * 0.3}s linear infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    <animateMotion
                      dur={`${6 + i * 0.4}s`}
                      repeatCount="indefinite"
                      path={`M 0 0 L ${200 - x} ${200 - y}`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <span
                className="absolute inset-[-14px] rounded-full opacity-70"
                style={{
                  background: 'radial-gradient(circle, rgba(124,92,252,0.4), transparent 65%)',
                  animation: 'hubPulse 2.8s ease-in-out infinite',
                }}
              />
              <div
                className="relative h-28 w-28 md:h-32 md:w-32 rounded-full flex items-center justify-center border border-accent/40"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(124,92,252,0.35), rgba(17,17,24,0.95))',
                  boxShadow: '0 0 40px rgba(124,92,252,0.5), inset 0 0 20px rgba(124,92,252,0.2)',
                }}
              >
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">INSEAT</div>
                  <div className="mt-0.5 font-mono text-[9px] tracking-[0.25em] text-dim">CORE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div
            className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full transition-all duration-300 ${
              active ? 'opacity-100 translate-y-[calc(100%+8px)]' : 'opacity-0 pointer-events-none'
            }`}
          >
            {active && (
              <div className="v2-glass-strong rounded-xl px-4 py-2 border border-accent/30 whitespace-nowrap text-xs text-muted">
                <span className="text-foreground font-semibold mr-2">
                  {nodes.find((n) => n.key === active)?.label}
                </span>
                {nodes.find((n) => n.key === active)?.desc}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes hubPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
