import { useState } from 'react';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    tagline: 'Forever free. Real business on real software.',
    cta: 'Start free',
    featured: false,
    features: [
      'QR table ordering',
      'Up to 10 tables',
      'Digital menu + AI OCR import',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    monthly: 49,
    annual: 39,
    tagline: 'For operators running a real shift.',
    cta: 'Start Pro',
    featured: true,
    features: [
      'Everything in Starter',
      'Kitchen display system',
      'Reservations + waitlist + SMS',
      'Loyalty + targeted offers',
      'Unlimited tables',
      'Live analytics dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    monthly: 99,
    annual: 79,
    tagline: 'Multi-location, multi-currency, multi-stack.',
    cta: 'Talk to sales',
    featured: false,
    features: [
      'Everything in Pro',
      'Multi-location dashboard',
      'Custom integrations',
      'SSO + role-based access',
      'Dedicated success manager',
      'Custom SLAs',
    ],
  },
];

export default function PricingV2() {
  const [annual, setAnnual] = useState(true);

  const adminUrl = (import.meta.env.VITE_ADMIN_URL as string | undefined) || 'http://localhost:5173';

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="v2-chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Simple pricing
          </div>
          <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            <span className="text-foreground">Pick a shift. </span>
            <span className="v2-gradient-text">Scale to a chain.</span>
          </RevealText>
          <RevealText as="p" className="mt-5 text-lg text-muted" delay={0.3}>
            Start on the free plan. Upgrade when the covers demand it.
          </RevealText>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-hairline p-1">
            <ToggleBtn active={!annual} onClick={() => setAnnual(false)}>Monthly</ToggleBtn>
            <ToggleBtn active={annual} onClick={() => setAnnual(true)}>
              Annual
              <span className="ml-2 rounded-full bg-mint/20 px-2 py-0.5 text-[9px] font-mono text-mint">
                Save 20%
              </span>
            </ToggleBtn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => {
            const price = annual ? t.annual : t.monthly;
            return (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 transition-all ${
                  t.featured
                    ? 'v2-glass-strong border border-accent/40 shadow-glow-accent md:-translate-y-3'
                    : 'v2-glass border border-hairline'
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-white shadow-glow-accent">
                      <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                      Most popular
                    </span>
                  </div>
                )}

                <div className="text-sm font-mono uppercase tracking-[0.22em] text-dim">{t.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold text-foreground">
                    {price === 0 ? 'Free' : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-sm text-dim">/ mo {annual && <span className="text-[10px]">billed annually</span>}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{t.tagline}</p>

                <div className="mt-6 h-px bg-hairline" />

                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check size={14} className="mt-0.5 text-mint shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  {t.name === 'Scale' ? (
                    <MagneticButton
                      as="a"
                      href="#demo"
                      className="v2-btn-secondary w-full justify-center"
                      cursor="view"
                      cursorText="TALK"
                    >
                      {t.cta}
                    </MagneticButton>
                  ) : (
                    <MagneticButton
                      as="a"
                      href={`${adminUrl}/register?plan=${t.name.toLowerCase()}`}
                      className={`${t.featured ? 'v2-btn-primary' : 'v2-btn-secondary'} w-full justify-center`}
                      cursor="view"
                      cursorText="GO"
                    >
                      {t.cta}
                    </MagneticButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-5 py-2 text-xs font-medium transition ${
        active ? 'text-foreground' : 'text-dim hover:text-foreground/80'
      }`}
      data-cursor="hover"
    >
      {active && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(124,92,252,0.3), rgba(0,229,196,0.15))',
            border: '1px solid rgba(124,92,252,0.4)',
          }}
        />
      )}
      <span className="relative flex items-center">{children}</span>
    </button>
  );
}
