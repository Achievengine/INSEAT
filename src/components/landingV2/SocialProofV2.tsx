import RevealText from '../ui/RevealText';
import NumberCounter from '../ui/NumberCounter';
import GlassCard from '../ui/GlassCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We cut average ticket time by 38% in week one. The KDS alone paid for the platform.',
    name: 'Selam T.',
    role: 'GM, Blue Nile',
    location: 'Addis Ababa',
  },
  {
    quote:
      'Replaced four separate tools. The night team actually uses the dashboard instead of fighting it.',
    name: 'Rahul M.',
    role: 'Operations Director',
    location: 'Mumbai',
  },
  {
    quote:
      'QR ordering pushed our avg check up 14%. Loyalty brought weekday covers back to pre-pandemic.',
    name: 'Khalid A.',
    role: 'Owner, Zaytoun Grill',
    location: 'Sharjah, UAE',
  },
];

export default function SocialProofV2() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <div className="v2-chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            What teams are saying
          </div>
          <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            <span className="text-foreground">Operators who shipped </span>
            <span className="v2-gradient-text">their night shift on INSEAT.</span>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <GlassCard key={i} padding="p-7" className="group">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} size={14} className="text-mint fill-mint" />
                ))}
              </div>
              <p className="text-base text-foreground/85 leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-5 border-t border-hairline flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, hsl(${180 + i * 40} 70% 55%), hsl(${260 + i * 30} 65% 60%))`,
                  }}
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-[11px] text-dim font-mono">{t.role} · {t.location}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Proof bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          <ProofStat to={3} label="Countries served" />
          <ProofStat to={280} label="Teams onboarded" suffix="+" />
          <ProofStat to={1.2} label="Guest interactions / mo" suffix="M" decimals={1} />
          <ProofStat to={38} label="Avg. ticket time drop" suffix="%" />
        </div>
      </div>
    </section>
  );
}

function ProofStat({ to, suffix, label, decimals = 0 }: { to: number; suffix?: string; label: string; decimals?: number }) {
  return (
    <div className="bg-surface/60 p-6 md:p-8">
      <NumberCounter
        to={to}
        suffix={suffix}
        decimals={decimals}
        className="block font-display text-3xl md:text-4xl font-bold text-foreground"
        duration={2}
      />
      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] font-mono text-dim">{label}</div>
    </div>
  );
}
