import { motion } from 'framer-motion';

const highlights = [
  {
    label: 'One-Shot OCR Capture',
    description: 'Scan once and generate structured categories, items, and pricing in a single pass.',
  },
  {
    label: 'Review Before Publish',
    description: 'Managers verify extracted content in draft before anything goes live.',
  },
  {
    label: 'Bulk Menu Creation',
    description: 'Publish complete menus from OCR output instead of manual item-by-item setup.',
  },
];

const LoyaltyEngagement = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              AI Menu Operations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              <span className="text-secondary">Convert a paper menu into </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 100%)',
                }}
              >
                a digital menu in one scan
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              AI OCR does a one-shot extraction from the uploaded paper menu, then your managers review and publish the structured menu.
            </p>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side — clean card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl bg-black p-8 shadow-2xl shadow-black/10">
              {/* OCR summary mockup */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-7 4h8m-9 4h10m-8 4h6m-7 6h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">OCR Menu Scan</p>
                  <p className="text-white/40 text-xs">Captured from uploaded menu image</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-primary font-bold text-xl">47</p>
                  <p className="text-white/40 text-xs">items parsed</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Validation progress</span>
                  <span>Ready to publish</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '86%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>

              {/* Recent extraction outputs */}
              <div className="space-y-3">
                {['9 categories extracted', 'Modifier groups detected', 'Draft ready for publish'].map((reward, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-white/70">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyEngagement;
