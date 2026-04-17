import MarqueeRow from '../ui/MarqueeRow';

const brands = [
  'Zaytoun Grill',
  'Kaldi\'s Coffee',
  'Sagar Kitchen',
  'Barista & Co.',
  'Al Waha',
  'Spice Route',
  'Habesha House',
  'Urban Plate',
  'The Burj Café',
  'Saffron Lane',
  'Delhi Junction',
  'Blue Nile',
];

export default function TrustedByMarquee() {
  return (
    <section className="relative py-16 border-y border-hairline">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.28em] text-dim font-mono">
            Powering hospitality teams in 3 countries
          </span>
        </div>
      </div>
      <MarqueeRow speed={50}>
        {brands.map((name) => (
          <div
            key={name}
            className="flex items-center gap-3 whitespace-nowrap text-2xl md:text-3xl font-display font-bold text-foreground/35 hover:text-foreground/70 transition-colors"
          >
            {name}
            <span className="text-accent/40 text-base">◆</span>
          </div>
        ))}
      </MarqueeRow>
    </section>
  );
}
