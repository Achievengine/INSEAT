import { useState } from 'react';
import RevealText from '../ui/RevealText';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How does INSEAT QR code ordering work?',
    a: 'Guests scan a QR code on their table, which opens your digital menu in their browser. They browse, customize items, place orders, and pay — all without downloading an app. Orders land directly on your kitchen display.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The Starter plan is free forever and includes QR ordering, digital menu, AI OCR menu import, and basic analytics for up to 10 tables. No credit card required.',
  },
  {
    q: 'Which countries is INSEAT available in?',
    a: 'INSEAT is currently live in the UAE, Ethiopia, and India, with regional payment gateways (Stripe, MPGS, Chapa, Telebirr, Apple Pay) all pre-integrated. We\'re expanding to more markets through 2026.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are serving orders in under 5 minutes. Use our AI OCR to import your existing paper menu — scan it once and INSEAT extracts every item automatically.',
  },
  {
    q: 'Does INSEAT work with my existing POS?',
    a: 'INSEAT is a full platform that can replace or complement your existing POS. You can run it standalone, or use our integration layer to sync orders, inventory, and analytics with third-party systems.',
  },
  {
    q: 'What about offline service?',
    a: 'The POS and KDS continue operating if the internet drops. Orders queue locally and sync when connection returns, so service never stops.',
  },
];

export default function FAQv2() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-12">
          <div>
            <div className="v2-chip mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Frequently asked
            </div>
            <RevealText as="h2" className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]">
              <span className="text-foreground">Questions </span>
              <span className="v2-gradient-text">we hear every day.</span>
            </RevealText>
            <p className="mt-5 text-muted">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="#demo" className="text-foreground underline underline-offset-4 decoration-accent/50 hover:decoration-accent">
                Book a 20-min call
              </a>{' '}
              with our team.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? 'border-accent/30 bg-surface/60' : 'border-hairline bg-surface/30 hover:bg-surface/50'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    data-cursor="hover"
                  >
                    <span className="text-base md:text-lg font-semibold text-foreground">{f.q}</span>
                    <span
                      className={`shrink-0 h-7 w-7 flex items-center justify-center rounded-full border border-hairline bg-white/[0.02] transition-transform duration-500 ${
                        isOpen ? 'rotate-45 border-accent/40 bg-accent/10' : ''
                      }`}
                    >
                      <Plus size={14} className={isOpen ? 'text-accent' : 'text-foreground/70'} />
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out-expo"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-muted leading-relaxed max-w-2xl">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
