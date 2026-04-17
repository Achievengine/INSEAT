import RevealText from '../ui/RevealText';
import NumberCounter from '../ui/NumberCounter';
import GlassCard from '../ui/GlassCard';

const pains = [
  {
    before: 'Fragmented tools',
    beforeCopy: 'Separate POS, reservations, loyalty, payroll.',
    after: 'One brain',
    afterCopy: 'Every surface talks to every other surface.',
    metric: 7,
    metricLabel: 'Tools replaced',
  },
  {
    before: 'Slow ticket times',
    beforeCopy: 'Orders bouncing between terminals and screens.',
    after: 'Cut by 38%',
    afterCopy: 'KDS routes items to the right station in real time.',
    metric: 38,
    metricLabel: '% faster tickets',
    suffix: '%',
  },
  {
    before: 'Blind ops',
    beforeCopy: 'Reports on Monday about what broke on Friday.',
    after: 'Live everything',
    afterCopy: 'Covers, revenue, queue times — on the glass, right now.',
    metric: 24,
    metricLabel: 'Hour visibility',
    suffix: 'h',
  },
];

export default function PainPointsV2() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="mb-5 v2-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Before / After
          </div>
          <RevealText as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            <span className="text-foreground">The before was </span>
            <span className="v2-gradient-text">a mess of dashboards.</span>
          </RevealText>
          <RevealText as="p" className="mt-5 text-lg text-muted max-w-2xl" delay={0.3}>
            Every restaurant used to stitch seven tools together. INSEAT replaces the stitching.
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <GlassCard key={i} padding="p-7" className="group">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-dim font-mono">Before</span>
                <span className="font-mono text-[10px] text-[#FF4D6A]/80">0{i + 1}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-foreground/70 line-through decoration-[#FF4D6A]/60">
                <span className="text-xl font-semibold">{p.before}</span>
              </div>
              <p className="mt-1 text-sm text-dim">{p.beforeCopy}</p>

              <div className="my-5 h-px bg-hairline" />

              <div className="flex items-baseline justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-mint font-mono">After</span>
                <NumberCounter
                  to={p.metric}
                  suffix={p.suffix}
                  className="font-mono text-[10px] text-mint"
                  duration={1.4}
                />
              </div>
              <div className="mt-2 text-2xl font-semibold text-foreground">{p.after}</div>
              <p className="mt-1 text-sm text-muted">{p.afterCopy}</p>

              <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em]">
                <span className="text-dim">{p.metricLabel}</span>
                <span className="text-mint">INSEAT</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
