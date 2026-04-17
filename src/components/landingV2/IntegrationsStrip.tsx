import MarqueeRow from '../ui/MarqueeRow';

const row1 = ['Stripe', 'Apple Pay', 'MPGS', 'Chapa', 'Telebirr', 'Google Pay', 'Mada'];
const row2 = ['Talabat', 'Deliveroo', 'Careem', 'Zomato', 'Uber Eats', 'Noon Food', 'Glovo'];

export default function IntegrationsStrip() {
  return (
    <section id="integrations" className="relative py-20 md:py-24 border-y border-hairline bg-surface/30">
      <div className="container-custom mb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="v2-chip mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Integrations
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-bold tracking-[-0.015em] text-foreground max-w-2xl">
              Plays well with your payments, delivery apps, and accounting stack.
            </h3>
          </div>
          <a href="/integrations" className="v2-btn-secondary text-xs" data-cursor="hover">
            See all integrations
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <MarqueeRow speed={45} direction="left">
          {row1.map((name) => (
            <LogoPill key={name} name={name} />
          ))}
        </MarqueeRow>
        <MarqueeRow speed={55} direction="right">
          {row2.map((name) => (
            <LogoPill key={name} name={name} />
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}

function LogoPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-hairline bg-white/[0.02] px-5 py-3 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-mint" />
      <span className="text-sm font-semibold text-foreground/75 whitespace-nowrap">{name}</span>
    </div>
  );
}
