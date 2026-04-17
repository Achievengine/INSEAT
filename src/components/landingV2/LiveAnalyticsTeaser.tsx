import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import RevealText from '../ui/RevealText';
import NumberCounter from '../ui/NumberCounter';

const ranges = ['Today', 'Week', 'Month'];

const datasets: Record<string, number[]> = {
  Today: [38, 52, 46, 70, 58, 82, 68, 90, 74, 88, 62, 78],
  Week: [55, 62, 48, 72, 85, 60, 78, 82, 68, 90, 72, 88],
  Month: [42, 58, 66, 74, 52, 68, 80, 62, 76, 84, 70, 92],
};

export default function LiveAnalyticsTeaser() {
  const [range, setRange] = useState<'Today' | 'Week' | 'Month'>('Today');
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Auto-cycle the range selector
  useEffect(() => {
    const id = setInterval(() => {
      setRange((r) => (r === 'Today' ? 'Week' : r === 'Week' ? 'Month' : 'Today'));
    }, 3800);
    return () => clearInterval(id);
  }, []);

  // Parallax: the slab floats up slower than scroll
  useEffect(() => {
    if (reduced || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapRef.current!,
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-center">
          <div>
            <div className="v2-chip mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              Live analytics
            </div>
            <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
              <span className="text-foreground">The shift that just happened </span>
              <span className="v2-gradient-text">is already a chart.</span>
            </RevealText>
            <RevealText as="p" className="mt-5 text-lg text-muted max-w-lg" delay={0.3}>
              No end-of-day exports. No spreadsheets. Revenue, covers, item mix, staff performance —
              updated every second, on the glass.
            </RevealText>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Daily covers" to={1284} />
              <Stat label="Avg check" prefix="$" to={38} decimals={0} />
              <Stat label="Repeat guests" to={48} suffix="%" />
            </div>
          </div>

          <div ref={wrapRef}>
            <div className="v2-glass-strong rounded-2xl p-6 shadow-card-v2">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim">Revenue · {range}</div>
                  <div className="mt-1 text-3xl font-semibold text-foreground">
                    ${range === 'Today' ? '4,812' : range === 'Week' ? '28,412' : '112,840'}
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/[0.03] border border-hairline p-1">
                  {ranges.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRange(r as 'Today' | 'Week' | 'Month')}
                      className={`relative px-3 py-1 text-[11px] font-medium rounded-full transition ${
                        range === r ? 'text-foreground' : 'text-dim hover:text-foreground/80'
                      }`}
                      data-cursor="hover"
                    >
                      {range === r && (
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, rgba(124,92,252,0.3), rgba(0,229,196,0.15))',
                            border: '1px solid rgba(124,92,252,0.4)',
                          }}
                        />
                      )}
                      <span className="relative">{r}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="h-48 flex items-end gap-2">
                {datasets[range].map((h, i) => (
                  <div
                    key={`${range}-${i}`}
                    className="flex-1 rounded-t transition-all duration-700 ease-out-expo"
                    style={{
                      height: `${h}%`,
                      background:
                        i === datasets[range].length - 1
                          ? 'linear-gradient(180deg, var(--v2-accent-2) 0%, var(--v2-accent) 100%)'
                          : 'linear-gradient(180deg, rgba(124,92,252,0.55) 0%, rgba(124,92,252,0.08) 100%)',
                    }}
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4 pt-6 border-t border-hairline">
                <MiniStat label="Orders" value="128" trend="+12%" />
                <MiniStat label="Tables" value="17/24" trend="+3" />
                <MiniStat label="Avg time" value="11:42" trend="-8%" positive />
                <MiniStat label="Tips" value="$412" trend="+22%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label, to, prefix, suffix, decimals,
}: { label: string; to: number; prefix?: string; suffix?: string; decimals?: number }) {
  return (
    <div>
      <NumberCounter
        to={to}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="block text-3xl font-semibold text-foreground"
        duration={1.8}
      />
      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-dim">{label}</div>
    </div>
  );
}

function MiniStat({ label, value, trend, positive = true }: { label: string; value: string; trend: string; positive?: boolean }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-sm font-semibold text-foreground font-mono">{value}</span>
        <span className={`text-[10px] font-mono ${positive ? 'text-mint' : 'text-[#FF4D6A]'}`}>{trend}</span>
      </div>
    </div>
  );
}
