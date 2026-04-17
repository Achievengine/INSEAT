import { useMemo, useState } from 'react';
import RevealText from '../ui/RevealText';
import NumberCounter from '../ui/NumberCounter';

export default function ROICalculator() {
  const [covers, setCovers] = useState(200);
  const [avgCheck, setAvgCheck] = useState(32);
  const [locations, setLocations] = useState(1);

  const { monthlySavings, hoursSaved, avgLift } = useMemo(() => {
    const monthlyRevenue = covers * avgCheck * 30 * locations;
    // INSEAT typically lifts efficiency ~8% via faster tickets/reduced errors/no-shows
    const lift = Math.round(monthlyRevenue * 0.08);
    // Assume 3 ops hours saved per day per location
    const hrs = 3 * 30 * locations;
    return {
      monthlySavings: lift,
      hoursSaved: hrs,
      avgLift: 8,
    };
  }, [covers, avgCheck, locations]);

  return (
    <section id="roi" className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[140px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,229,196,0.35), transparent 70%)' }}
        />
      </div>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="v2-chip mb-5 mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              Show me the math
            </div>
            <RevealText
              as="h2"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]"
            >
              <span className="text-foreground">What&apos;s INSEAT worth </span>
              <span className="v2-gradient-text">to your floor?</span>
            </RevealText>
            <RevealText as="p" className="mt-5 text-lg text-muted max-w-xl mx-auto" delay={0.3}>
              Tell us your volume. We&apos;ll show your projected lift based on the median team we&apos;ve
              onboarded.
            </RevealText>
          </div>

          <div className="v2-glass-strong rounded-3xl p-7 md:p-10 shadow-card-v2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
              <SliderInput
                label="Covers / day"
                value={covers}
                onChange={setCovers}
                min={20}
                max={1500}
                step={10}
                format={(v) => v.toLocaleString()}
              />
              <SliderInput
                label="Avg check"
                value={avgCheck}
                onChange={setAvgCheck}
                min={5}
                max={200}
                step={1}
                format={(v) => `$${v}`}
              />
              <SliderInput
                label="Locations"
                value={locations}
                onChange={setLocations}
                min={1}
                max={25}
                step={1}
              />
            </div>

            <div className="my-8 h-px bg-hairline" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Result
                label="Projected monthly lift"
                value={monthlySavings}
                prefix="$"
                format={(v) => Math.round(v).toLocaleString()}
                highlight
              />
              <Result
                label="Ops hours saved / month"
                value={hoursSaved}
                suffix="h"
              />
              <Result
                label="Median efficiency gain"
                value={avgLift}
                suffix="%"
              />
            </div>

            <p className="mt-8 text-center text-xs text-dim font-mono">
              * Based on the median 90-day lift across INSEAT teams in UAE / ET / IN.
              Not a contractual guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim">{label}</label>
        <span className="text-2xl font-semibold text-foreground font-mono">
          {format ? format(value) : value}
        </span>
      </div>
      <div className="mt-3 relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="v2-slider w-full"
          data-cursor="hover"
          aria-label={label}
        />
      </div>
      <style>{`
        .v2-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--v2-accent) 0%,
            var(--v2-accent-2) ${pct}%,
            rgba(255,255,255,0.08) ${pct}%,
            rgba(255,255,255,0.08) 100%
          );
          border-radius: 9999px;
          outline: none;
        }
        .v2-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(124,92,252,0.2), 0 6px 14px rgba(124,92,252,0.5);
          cursor: none;
          border: none;
          transition: transform 0.2s ease;
        }
        .v2-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .v2-slider::-moz-range-thumb {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #fff;
          border: none;
          box-shadow: 0 0 0 4px rgba(124,92,252,0.2), 0 6px 14px rgba(124,92,252,0.5);
        }
      `}</style>
    </div>
  );
}

function Result({
  label,
  value,
  prefix,
  suffix,
  format,
  highlight,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-5 ${highlight ? 'bg-gradient-to-br from-accent/20 to-mint/10 border border-accent/30' : 'border border-hairline'}`}>
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-dim">{label}</div>
      <NumberCounter
        to={value}
        prefix={prefix}
        suffix={suffix}
        format={format}
        key={`${value}-${prefix}-${suffix}`}
        duration={1}
        immediate
        shimmer={false}
        className={`mt-2 block font-display text-3xl md:text-4xl font-bold ${highlight ? 'v2-gradient-text' : 'text-foreground'}`}
      />
    </div>
  );
}
