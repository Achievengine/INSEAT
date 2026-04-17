import { useState } from 'react';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';
import { Check } from 'lucide-react';

export default function CTABlock() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const adminUrl = (import.meta.env.VITE_ADMIN_URL as string | undefined) || 'http://localhost:5173';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Existing demo endpoint would go here; for now optimistic success
    setSubmitted(true);
  };

  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden border border-hairline bg-surface2">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 v2-grid-bg opacity-30" />
            <div
              className="absolute -left-20 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-[100px] opacity-50"
              style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.4), transparent 70%)' }}
            />
            <div
              className="absolute -right-20 top-0 h-[300px] w-[300px] rounded-full blur-[80px] opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(0,229,196,0.35), transparent 70%)' }}
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-8 md:p-14">
            <div>
              <div className="v2-chip mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Book a demo
              </div>
              <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
                <span className="text-foreground">See INSEAT on </span>
                <span className="v2-gradient-text">your floor.</span>
              </RevealText>
              <p className="mt-5 text-lg text-muted max-w-md">
                Pick a 20-minute slot. We&apos;ll walk through your setup, import your menu live, and
                show the platform on the exact shift you&apos;re running.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Live menu import from your existing PDF or photo',
                  'Personalized floor plan + KDS configuration',
                  'Direct answer to your integration questions',
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-5 w-5 rounded-full bg-mint/15 border border-mint/40 flex items-center justify-center">
                      <Check size={11} className="text-mint" />
                    </span>
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton
                  as="a"
                  href={`${adminUrl}/register?plan=mid`}
                  className="v2-btn-primary"
                  cursor="view"
                  cursorText="START"
                >
                  Start free instead
                </MagneticButton>
              </div>
            </div>

            {/* Form */}
            <div className="v2-glass-strong rounded-2xl p-7 md:p-8 self-start">
              {submitted ? (
                <SuccessState name={name} />
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.22em] font-mono text-dim mb-2">
                    Request a demo
                  </div>

                  <V2Input label="Your name" value={name} onChange={setName} required placeholder="Aisha Mohammed" />
                  <V2Input label="Restaurant / brand" value={restaurant} onChange={setRestaurant} required placeholder="Zaytoun Grill" />
                  <V2Input
                    label="Work email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                    placeholder="aisha@zaytoun.com"
                  />

                  <div className="pt-2">
                    <MagneticButton
                      as="button"
                      type="submit"
                      className="v2-btn-primary w-full justify-center"
                      cursor="view"
                      cursorText="SEND"
                    >
                      Request my demo
                    </MagneticButton>
                  </div>

                  <p className="text-[11px] text-dim text-center pt-1">
                    We typically respond within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function V2Input({
  label,
  value,
  onChange,
  required,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block group">
      <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-dim mb-1.5">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-hairline text-foreground placeholder:text-dim/60 text-base py-2 outline-none transition-colors focus:border-accent"
        data-cursor="hover"
      />
    </label>
  );
}

function SuccessState({ name }: { name: string }) {
  return (
    <div className="text-center py-8">
      <div className="relative mx-auto h-16 w-16 rounded-full bg-mint/15 border border-mint/40 flex items-center justify-center mb-5">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00E5C4" strokeWidth="2.5">
          <path
            d="M5 12l5 5L20 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: 30,
              animation: 'checkDraw 0.7s 0.2s ease-out forwards',
            }}
          />
        </svg>
        <style>{`@keyframes checkDraw { to { stroke-dashoffset: 0; } }`}</style>
      </div>
      <div className="text-lg font-semibold text-foreground">
        Thanks{name ? `, ${name.split(' ')[0]}` : ''} — we&apos;re on it.
      </div>
      <p className="mt-2 text-sm text-muted">
        A member of our team will reach out within one business day with a calendar link.
      </p>
    </div>
  );
}
