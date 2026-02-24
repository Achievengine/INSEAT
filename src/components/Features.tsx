import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { sanityClient, featuresQuery } from '../lib/sanityClient';

const Features = () => {
  const [cms, setCms] = useState<{ headline?: string; subheadline?: string; items?: any[] } | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    sanityClient.fetch(featuresQuery).then(setCms).catch(() => {});
  }, []);

  const fallbackFeatures = useMemo(
    () => [
      {
        id: 1,
        title: 'Contactless Ordering',
        description:
          'Allow customers to scan a QR code, browse your menu, and place orders directly from their phones without downloading any app.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
          </svg>
        )
      },
      {
        id: 2,
        title: 'Real-time Menu Management',
        description: 'Update your menu items, prices, or availability instantly. Changes reflect immediately across all customer devices.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
          </svg>
        )
      },
      {
        id: 3,
        title: 'Analytics Dashboard',
        description: 'Track sales, popular items, peak hours, and customer preferences with our powerful analytics dashboard.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
          </svg>
        )
      },
      {
        id: 4,
        title: 'Instant Payments',
        description:
          'Enable customers to pay directly from their phones using various payment methods, reducing wait times and improving table turnover.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m2 4h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm7-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
        )
      },
      {
        id: 5,
        title: 'Multi-language Support',
        description: 'Cater to international customers with automatic menu translation into multiple languages, enhancing the dining experience.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        )
      },
      {
        id: 6,
        title: 'Kitchen Display System',
        description: 'Orders are automatically sent to your kitchen display system, ensuring efficient preparation and reducing errors.',
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        )
      }
    ],
    []
  );

  const cmsItems = Array.isArray(cms?.items) ? cms?.items : [];
  const features = cmsItems.length
    ? cmsItems.map((item: any, index: number) => ({
        ...item,
        id: item?.id || index + 1,
        icon: item?.icon || fallbackFeatures[index % fallbackFeatures.length]?.icon
      }))
    : fallbackFeatures;

  const safeActive = Math.min(activeFeature, Math.max(features.length - 1, 0));
  const activeItem = features[safeActive];
  const relatedIndices = useMemo(() => {
    const total = features.length;
    if (total <= 1) return [];
    return Array.from({ length: Math.min(3, total - 1) }, (_, offset) => (safeActive + offset + 1) % total);
  }, [features.length, safeActive]);

  return (
    <section id="features" className="relative overflow-hidden bg-black py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(97,6,235,0.34),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_86%,rgba(97,6,235,0.22),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-heading"
          >
            {cms?.headline || 'Powerful Features For Your Restaurant'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="section-subheading text-white/75"
          >
            {cms?.subheadline || 'Revolutionize your restaurant operations with our comprehensive QR code ordering system'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[330px_minmax(0,1fr)]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.04] p-4"
          >
            <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">CAPABILITY INDEX</p>
              <p className="mt-1 text-lg font-bold text-white">Core Capabilities</p>
            </div>
            <div className="relative mt-4">
              <div className="absolute bottom-2 left-[13px] top-2 w-px bg-white/15" />
              <div className="space-y-2">
                {features.map((feature: any, index: number) => {
                  const active = safeActive === index;
                  return (
                    <button
                      key={feature.id || feature.title || index}
                      type="button"
                      onMouseEnter={() => setActiveFeature(index)}
                      onFocus={() => setActiveFeature(index)}
                      onClick={() => setActiveFeature(index)}
                      className={`relative w-full rounded-2xl border px-4 py-3 text-left transition-colors ${
                        active ? 'border-primary bg-primary/22 text-white' : 'border-white/15 bg-black/45 text-white/78 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 inline-flex h-7 min-w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                            active ? 'border-white/55 bg-white/12 text-white' : 'border-white/25 bg-black/45 text-primary'
                          }`}
                        >
                          {`0${index + 1}`}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base font-bold leading-snug">{feature.title}</h3>
                          <p className="mt-1 line-clamp-2 text-xs text-white/68">{feature.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[32px] border border-primary/40 bg-black p-7 shadow-[0_40px_80px_-45px_rgba(97,6,235,0.9)] md:p-9"
          >
            <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-64 w-64 rounded-full bg-primary/22 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-90px] left-[-90px] h-56 w-56 rounded-full bg-primary/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.08)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.06)_95%)] bg-[size:22px_22px]" />
            <div className="pointer-events-none absolute right-6 top-2 text-[8rem] font-black leading-none text-white/[0.04] md:text-[11rem]">
              {`0${safeActive + 1}`}
            </div>
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary">{`ACTIVE CAPABILITY 0${safeActive + 1}`}</p>
                  <h3 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">{activeItem?.title}</h3>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/55 bg-primary/20 text-primary">
                  <div className="scale-110">{activeItem?.icon}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="max-w-3xl text-base leading-relaxed text-white/82 md:text-lg">{activeItem?.description}</p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {relatedIndices.slice(0, 2).map((featureIndex, cardIndex) => {
                      const feature = features[featureIndex];
                      return (
                        <motion.button
                          key={`${feature.id || feature.title || featureIndex}-related`}
                          type="button"
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.35, delay: cardIndex * 0.05 }}
                          whileHover={{ y: -3 }}
                          onClick={() => setActiveFeature(featureIndex)}
                          className="group rounded-2xl border border-white/15 bg-black/65 p-4 text-left transition-colors hover:border-primary/55"
                        >
                          <div className="mb-2.5 flex items-center justify-between">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black text-primary">
                              {feature.icon}
                            </div>
                            <span className="text-xs font-semibold tracking-[0.18em] text-white/45 group-hover:text-white/75">{`0${featureIndex + 1}`}</span>
                          </div>
                          <h4 className="mb-1.5 text-lg font-bold text-white">{feature.title}</h4>
                          <p className="line-clamp-2 text-sm leading-relaxed text-white/72">{feature.description}</p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="relative lg:col-span-4">
                  <div className="absolute -right-2 top-6 hidden h-full w-full rounded-3xl border border-primary/25 bg-primary/10 lg:block" />
                  <div className="relative rounded-3xl border border-white/15 bg-black/75 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary">LIVE SIGNALS</p>
                    <div className="mt-4 space-y-3">
                      {relatedIndices.map((featureIndex, idx) => (
                        <button
                          key={`signal-${featureIndex}`}
                          type="button"
                          onClick={() => setActiveFeature(featureIndex)}
                          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2.5 text-left transition-colors hover:border-primary/55"
                        >
                          <p className="text-[10px] font-semibold tracking-[0.16em] text-primary">{`SIGNAL 0${idx + 1}`}</p>
                          <p className="mt-1 text-sm font-semibold text-white">{features[featureIndex]?.title}</p>
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2">
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-primary">MODE</p>
                      <p className="mt-1 text-sm text-white/82">Restaurant Operations Core</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary">CAPABILITY COVERAGE</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {features.map((feature: any, index: number) => (
                    <button
                      key={`${feature.id || feature.title || index}-chip`}
                      type="button"
                      onClick={() => setActiveFeature(index)}
                      className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        safeActive === index
                          ? 'border-primary bg-primary/20 text-white'
                          : 'border-white/20 bg-black/45 text-white/72 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="tracking-[0.12em]">{`0${index + 1}`}</span>
                        <span className="truncate text-[11px] font-medium normal-case tracking-normal">{feature.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Features;
