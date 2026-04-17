import { useRef } from 'react';
import RevealText from '../ui/RevealText';
import {
  Utensils,
  QrCode,
  ChefHat,
  Users,
  CreditCard,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'QR table ordering',
    body: 'Guests scan, browse, and order from their phone. No apps. No downloads. Payments in the same flow.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen display',
    body: 'Tickets route by station in real time. Color-coded urgency. Bump, recall, and 86 with a tap.',
  },
  {
    icon: Utensils,
    title: 'Floor plan + reservations',
    body: 'Drag-drop table assignments. Waitlist SMS. No-show guardrails. Clarity on every shift.',
  },
  {
    icon: CreditCard,
    title: 'Multi-gateway payments',
    body: 'Stripe · MPGS · Chapa · Telebirr · Apple Pay. Guests check out in the currency they expect.',
  },
  {
    icon: Users,
    title: 'Staff operations',
    body: 'Shifts, roles, tips, performance. Manager tools that actually help managers manage.',
  },
  {
    icon: BarChart3,
    title: 'Live analytics',
    body: 'Covers, revenue, item mix, retention, and loyalty — on one glass, updated every second.',
  },
];

export default function FeaturesV2() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <div className="v2-chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            What&apos;s in the box
          </div>
          <RevealText
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]"
          >
            <span className="text-foreground">Built by people who&apos;ve </span>
            <span className="v2-gradient-text">worked the floor.</span>
          </RevealText>
          <RevealText as="p" className="mt-5 text-lg text-muted max-w-2xl" delay={0.3}>
            Six flagship capabilities. None of them bolted on. All of them talking to each other.
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="group relative rounded-2xl border border-hairline bg-surface/40 backdrop-blur overflow-hidden p-7 transition-colors duration-500 hover:border-accent/30"
      data-cursor="hover"
    >
      {/* radial follow-cursor glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(124,92,252,0.18), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-px rounded-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(124,92,252,0.35) 50deg, transparent 120deg, transparent 240deg, rgba(0,229,196,0.35) 310deg, transparent 360deg)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
      <div className="relative">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-white/[0.02]">
          <Icon size={20} className="text-accent" strokeWidth={1.8} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-sm text-muted leading-relaxed">{feature.body}</p>
      </div>
    </div>
  );
}
