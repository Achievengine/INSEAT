import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import RevealText from '../ui/RevealText';

interface Panel {
  tag: string;
  title: string;
  body: string;
  accent: string;
  mockup: React.ReactNode;
}

export default function HorizontalShowcase() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const panels: Panel[] = [
    {
      tag: '01 · POS & QR Ordering',
      title: 'Scan, browse, pay. Table to kitchen in seconds.',
      body: 'Guests order from their phone. Staff see orders fire into KDS instantly. Stripe, MPGS, Chapa, Telebirr, Apple Pay — all in one checkout.',
      accent: '#7C5CFC',
      mockup: <POSMockup />,
    },
    {
      tag: '02 · Kitchen Display',
      title: 'Every station knows exactly what to cook, when.',
      body: 'Auto-route items by prep station. Color coded urgency. Recall and bump with a tap. Ticket times drop 30-40% in week one.',
      accent: '#00E5C4',
      mockup: <KDSMockup />,
    },
    {
      tag: '03 · Reservations & Floor',
      title: 'A floor plan that actually mirrors your service.',
      body: 'Drag-drop table assignments, party tracking, no-show rules, automatic waitlist SMS. Your floor manager stops screaming across the room.',
      accent: '#FFB84D',
      mockup: <FloorMockup />,
    },
    {
      tag: '04 · Analytics & Loyalty',
      title: 'The shift that just happened is already a chart.',
      body: 'Live covers, revenue, item mix, staff performance, loyalty tiers. The analytics your GM actually opens every morning.',
      accent: '#7C5CFC',
      mockup: <AnalyticsMockup />,
    },
  ];

  useEffect(() => {
    if (reduced || !wrapRef.current || !trackRef.current) return;
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth;
      const viewport = window.innerWidth;
      const distance = totalWidth - viewport + 40;

      const st = ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top top',
        end: () => `+=${distance + 100}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
          const idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
          setActiveIndex(idx);
        },
        animation: gsap.to(track, {
          x: () => -(distance),
          ease: 'none',
        }),
      });

      return () => st.kill();
    }, wrapRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <section id="platform" ref={wrapRef} className="relative bg-surface/40 border-y border-hairline overflow-hidden">
      <div className="relative h-screen flex flex-col">
        {/* Heading */}
        <div className="container-custom pt-16 pb-6 shrink-0">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <div className="v2-chip mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Platform at a glance
              </div>
              <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
                <span className="text-foreground">One platform. </span>
                <span className="v2-gradient-text">Every shift.</span>
              </RevealText>
            </div>
            <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-dim">
              <span>scroll</span>
              <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
                <path d="M0 5h36m-5-4l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span className="text-foreground">0{activeIndex + 1} / 0{panels.length}</span>
            </div>
          </div>
        </div>

        {/* Track */}
        <div className="flex-1 relative flex items-center">
          <div
            ref={trackRef}
            className="flex gap-6 px-6 lg:gap-8 lg:px-12 will-change-transform"
            style={{
              width: 'max-content',
            }}
          >
            {panels.map((p, i) => (
              <div
                key={i}
                className="w-[88vw] lg:w-[80vw] xl:w-[72vw] max-w-6xl shrink-0"
              >
                <div
                  className="v2-glass-strong relative overflow-hidden rounded-3xl p-6 md:p-10 border border-hairline h-[58vh] max-h-[560px] min-h-[440px] flex flex-col lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8"
                >
                  <div className="flex flex-col justify-between z-10">
                    <div>
                      <div className="v2-chip mb-5" style={{ borderColor: `${p.accent}44`, background: `${p.accent}11` }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                        {p.tag}
                      </div>
                      <h3 className="font-display text-2xl md:text-4xl font-bold tracking-[-0.015em] text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-sm md:text-base text-muted max-w-md">{p.body}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-mono text-dim">
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      <span className="h-px w-12 bg-hairline" />
                      <span>{String(panels.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-40 blur-[80px]"
                      style={{ background: `radial-gradient(circle, ${p.accent}55, transparent 60%)` }}
                    />
                    <div className="relative w-full h-full">{p.mockup}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-px bg-hairline mx-6 lg:mx-12 mb-8">
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 origin-left"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, var(--v2-accent), var(--v2-accent-2))',
              transform: 'scaleX(0)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* =================== Mockups ================== */

function POSMockup() {
  return (
    <div className="v2-glass-strong relative h-full w-full rounded-2xl p-4 flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-hairline">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="font-mono text-[10px] text-accent">QR</span>
          </div>
          <div className="text-sm font-semibold">Table 07</div>
        </div>
        <div className="font-mono text-[10px] text-dim">3 items · $42.50</div>
      </div>
      <div className="flex-1 mt-3 space-y-2 overflow-hidden">
        {['Truffle Risotto', 'Sea Bass', 'Still Water'].map((item, i) => (
          <div key={item} className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-hairline px-3 py-2 text-xs">
            <span className="text-foreground/90">{item}</span>
            <span className="font-mono text-dim">${[22, 18, 2.5][i].toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl p-3 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, rgba(124,92,252,0.2), rgba(0,229,196,0.1))' }}>
        <span className="text-xs text-foreground">Pay with Apple Pay</span>
        <span className="text-xs font-mono">→</span>
      </div>
    </div>
  );
}

function KDSMockup() {
  const tickets = [
    { id: '#4821', t: 'T-07', elapsed: '04:12', stage: 'plating', color: '#00E5C4' },
    { id: '#4820', t: 'T-12', elapsed: '06:48', stage: 'cooking', color: '#FFB84D' },
    { id: '#4819', t: 'T-03', elapsed: '08:22', stage: 'cooking', color: '#FFB84D' },
    { id: '#4818', t: 'T-09', elapsed: '11:05', stage: 'late', color: '#FF4D6A' },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {tickets.map((t) => (
        <div key={t.id} className="v2-glass-strong rounded-xl p-3 border-l-2" style={{ borderLeftColor: t.color }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-foreground">{t.id}</span>
            <span className="font-mono text-[10px]" style={{ color: t.color }}>{t.stage.toUpperCase()}</span>
          </div>
          <div className="mt-1 text-lg font-semibold text-foreground">{t.t}</div>
          <div className="mt-2 space-y-1 text-[11px] text-muted">
            <div>2 × Risotto</div>
            <div>1 × Sea Bass</div>
          </div>
          <div className="mt-2 font-mono text-xs text-foreground">{t.elapsed}</div>
        </div>
      ))}
    </div>
  );
}

function FloorMockup() {
  const rows = 3;
  const cols = 5;
  return (
    <div className="v2-glass-strong relative h-full w-full rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-dim">
        <span>Main Dining</span>
        <span>17 / 24 occupied</span>
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const state = [0, 2, 3, 5, 7, 9, 10, 12].includes(i) ? 'occ' : [1, 4].includes(i) ? 'res' : 'free';
          const map = {
            occ: { bg: 'bg-mint/10', border: 'border-mint/30', dot: 'bg-mint' },
            res: { bg: 'bg-[#FFB84D]/10', border: 'border-[#FFB84D]/30', dot: 'bg-[#FFB84D]' },
            free: { bg: 'bg-white/[0.02]', border: 'border-hairline', dot: 'bg-white/20' },
          } as const;
          const s = map[state as 'occ' | 'res' | 'free'];
          return (
            <div key={i} className={`aspect-square rounded-lg border ${s.bg} ${s.border} flex items-center justify-center`}>
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
            </div>
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-mono text-dim">
        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> Occupied</div>
        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#FFB84D]" /> Reserved</div>
        <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> Available</div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [45, 62, 38, 78, 55, 88, 72, 90];
  return (
    <div className="v2-glass-strong h-full w-full rounded-2xl p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim">Revenue this week</div>
          <div className="text-2xl font-semibold text-foreground mt-1">$28,412</div>
        </div>
        <div className="font-mono text-[10px] text-mint">+22.8%</div>
      </div>
      <div className="mt-6 h-32 flex items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1
                ? 'linear-gradient(180deg, var(--v2-accent) 0%, var(--v2-accent-2) 100%)'
                : 'linear-gradient(180deg, rgba(124,92,252,0.6), rgba(124,92,252,0.15))',
            }}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-[10px] font-mono text-dim">
        {['Mon', 'Tue', 'Wed', 'Thu'].map((d) => (
          <span key={d} className="text-center">{d}</span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-hairline grid grid-cols-3 gap-3 text-xs">
        <div>
          <div className="text-dim text-[10px] font-mono">Covers</div>
          <div className="font-semibold text-foreground">1,284</div>
        </div>
        <div>
          <div className="text-dim text-[10px] font-mono">Avg check</div>
          <div className="font-semibold text-foreground">$38.21</div>
        </div>
        <div>
          <div className="text-dim text-[10px] font-mono">Repeat</div>
          <div className="font-semibold text-mint">48%</div>
        </div>
      </div>
    </div>
  );
}
