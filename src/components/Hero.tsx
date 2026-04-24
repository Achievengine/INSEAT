import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const MiniIcon = ({ active = false }: { active?: boolean }) => (
  <span
    className={
      active
        ? 'grid h-7 w-7 place-items-center rounded-lg bg-white shadow-[0_10px_24px_-16px_rgba(255,255,255,0.9)] before:h-3 before:w-3 before:rounded-[4px] before:bg-primary'
        : 'h-6 w-6 rounded-lg border border-white/16 bg-white/10'
    }
  />
);

const MetricTile = ({ index }: { index: number }) => (
  <div className="rounded-xl border border-white/32 bg-white/[0.86] p-3 shadow-[0_18px_48px_-36px_rgba(20,7,53,0.75)]">
    <div className="flex items-center justify-between">
      <span className="h-2 w-14 rounded-full bg-[#5b4876]/24" />
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/[0.08]">
        <span className="h-3 w-3 rounded-[4px] border border-primary/55" />
      </span>
    </div>
    <span className="mt-4 block h-5 w-20 rounded-md bg-[#160735]/90" />
    <div className="mt-3 flex items-center gap-1.5">
      <span className="h-1.5 rounded-full bg-primary/75" style={{ width: `${48 + index * 7}%` }} />
      <span className="h-1.5 w-5 rounded-full bg-[#53d4a4]/80" />
    </div>
  </div>
);

const StackedRows = ({ rows = 5 }: { rows?: number }) => (
  <div className="space-y-2.5">
    {Array.from({ length: rows }).map((_, index) => (
      <div
        key={index}
        className="grid grid-cols-[2.4rem_1fr_auto] items-center gap-2 rounded-xl border border-white/28 bg-white/[0.76] p-2 shadow-[0_16px_42px_-34px_rgba(20,7,53,0.72)]"
      >
        <span className="h-8 rounded-lg bg-gradient-to-br from-primary/85 to-primary/45" />
        <span className="space-y-1.5">
          <span className="block h-2 w-4/5 rounded-full bg-[#5b4876]/26" />
          <span className="block h-2 w-1/2 rounded-full bg-[#5b4876]/18" />
        </span>
        <span className={index % 2 === 0 ? 'h-5 w-5 rounded-full bg-[#53d4a4]/75' : 'h-5 w-5 rounded-full bg-[#ffb84d]/80'} />
      </div>
    ))}
  </div>
);

const MicroTable = () => (
  <div className="space-y-2">
    {Array.from({ length: 6 }).map((_, row) => (
      <div key={row} className="grid grid-cols-[1.1fr_0.65fr_0.45fr] items-center gap-2">
        <span className="h-2 rounded-full bg-[#5b4876]/20" style={{ width: `${82 - row * 5}%` }} />
        <span className="h-2 rounded-full bg-primary/65" style={{ width: `${52 + row * 6}%` }} />
        <span className={row % 3 === 0 ? 'h-2 rounded-full bg-[#53d4a4]/75' : 'h-2 rounded-full bg-[#ffb84d]/75'} />
      </div>
    ))}
  </div>
);

const ActivityRail = () => (
  <div className="grid grid-cols-5 items-end gap-2">
    {[42, 58, 36, 74, 64].map((height, index) => (
      <span key={index} className="rounded-t-md bg-gradient-to-t from-primary/90 via-primary/62 to-white/70" style={{ height: `${height}px` }} />
    ))}
  </div>
);

const BarChart = () => (
  <div className="grid h-40 grid-cols-7 items-end gap-2 rounded-xl border border-[#160735]/8 bg-white/78 p-4">
    {[48, 72, 38, 82, 56, 91, 68].map((height, index) => (
      <span key={index} className="relative rounded-t-lg bg-gradient-to-t from-primary to-white/70" style={{ height: `${height}%` }}>
        <span className="absolute inset-x-0 top-0 h-4 rounded-t-lg bg-white/55" />
      </span>
    ))}
  </div>
);

const Barcode = () => (
  <div className="flex h-20 items-stretch justify-center gap-[3px]">
    {[2, 5, 1, 3, 6, 2, 4, 1, 5, 2, 6, 3, 1, 4, 2, 5, 1, 3, 6, 2, 4, 1, 5, 2].map((width, index) => (
      <span key={index} className="rounded-full bg-[#160735]/90" style={{ width: `${width}px` }} />
    ))}
  </div>
);

const Hero = () => {
  return (
    <section className="relative z-[20] -mt-px overflow-hidden bg-[#18073a] pb-0 pt-14 text-white md:pt-16 lg:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute left-1/2 top-48 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]" />
        <div className="absolute right-[-12rem] top-8 h-[28rem] w-[28rem] rounded-full bg-white/[0.08] blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.085]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '86px 86px',
            maskImage: 'linear-gradient(to bottom, black, transparent 88%)'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,7,58,0)_0%,rgba(24,7,58,0)_78%,#ffffff_78%,#ffffff_100%)]" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl text-balance text-[clamp(2.38rem,5.05vw,4.75rem)] font-semibold leading-[0.98] tracking-tight text-white"
          >
            Streamline Every Guest Touchpoint
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-white/74 md:text-lg"
          >
            The all-in-one guest experience and operations platform for hospitality teams that need faster service, simpler workflows, and better customer experiences across every outlet.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <div className="w-full sm:w-auto">
              <a
                href={`${import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173'}/register?plan=mid`}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-white/12 px-7 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/18 active:scale-[0.98] sm:w-auto"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/35 blur-[1px] transition-transform duration-700 group-hover:translate-x-[260%]" />
                <span className="relative">Start Your 7-Day Free Trial</span>
              </a>
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.13em] text-white/48">
                No credit card required
              </p>
            </div>

            <a
              href="https://calendly.com/abenezer-t-achievengine/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/22 px-7 py-4 text-sm font-semibold text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/8 active:scale-[0.98] sm:w-auto"
            >
              Book a 15-Min Strategy Call
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-9 max-w-5xl lg:mt-10"
          aria-label="INSEAT product screens"
        >
          <div className="absolute inset-x-8 top-24 hidden h-72 rounded-full bg-primary/42 blur-[92px] md:block" />
          <div className="relative overflow-hidden rounded-t-[2rem] border border-b-0 border-white/26 bg-white/[0.16] px-4 pt-8 shadow-[0_42px_130px_-62px_rgba(0,0,0,0.95)] md:px-8 md:pt-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_50%_56%,rgba(97,6,235,0.5),transparent_44%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_44%)]" />
            <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:80px_80px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/45 to-transparent" />

            <div className="relative grid min-h-[360px] items-end gap-5 md:grid-cols-[0.74fr_1.32fr_0.74fr] md:gap-4 lg:min-h-[430px]">
              <div className="order-2 mx-auto w-full max-w-[330px] md:order-1 md:max-w-none md:translate-y-12 lg:translate-y-16">
                <div className="rounded-[1.65rem] border border-white/42 bg-white/20 p-3 shadow-[0_30px_90px_-48px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                  <div className="min-h-[575px] overflow-hidden rounded-[1.18rem] border border-white/36 bg-[#160735]/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.26)]">
                    <div className="flex items-center justify-between border-b border-white/20 bg-white/[0.09] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-white/55" />
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="h-2 w-20 rounded-full bg-white/38" />
                    </div>
                    <div className="grid grid-cols-[0.92fr_1.08fr] gap-3 p-4">
                      <div className="space-y-2.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div key={index} className="rounded-xl border border-white/28 bg-white/[0.66] p-3 shadow-[0_16px_40px_-34px_rgba(20,7,53,0.75)]">
                            <span className="block h-2 w-3/5 rounded-full bg-[#5b4876]/28" />
                            <span className="mt-3 block h-8 rounded-lg bg-gradient-to-r from-primary to-primary/62" />
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl border border-white/28 bg-white/[0.46] p-3 shadow-[0_18px_46px_-36px_rgba(20,7,53,0.75)]">
                        <div className="mb-3 grid grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, index) => (
                            <span
                              key={index}
                              className={
                                index % 4 === 0
                                  ? 'aspect-square rounded-lg bg-primary/80 shadow-[0_0_20px_rgba(97,6,235,0.36)]'
                                  : 'aspect-square rounded-lg border border-white/30 bg-[#160735]/24'
                              }
                            />
                          ))}
                        </div>
                        <StackedRows rows={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 mx-auto w-full md:order-2 md:translate-y-5 lg:translate-y-7">
                <div className="rounded-[1.85rem] border border-white/46 bg-white/22 p-3 shadow-[0_36px_100px_-45px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:p-4">
                  <div className="min-h-[620px] overflow-hidden rounded-[1.28rem] border border-white/38 bg-white/[0.18] shadow-[inset_0_1px_0_rgba(255,255,255,0.34)]">
                    <div className="grid grid-cols-[3rem_1fr]">
                      <div className="border-r border-white/20 bg-white/[0.08] px-2 py-4">
                        <div className="flex flex-col items-center gap-3">
                          <MiniIcon active />
                          <MiniIcon />
                          <MiniIcon />
                          <MiniIcon />
                          <MiniIcon />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between border-b border-white/22 px-5 py-4">
                          <div>
                            <span className="block h-2 w-28 rounded-full bg-white/54" />
                            <span className="mt-2 block h-2 w-20 rounded-full bg-white/25" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-7 w-7 rounded-full border border-white/20 bg-white/18" />
                            <span className="h-7 w-24 rounded-full border border-white/20 bg-white/18" />
                            <span className="h-8 w-8 rounded-full bg-primary/78" />
                          </div>
                        </div>

                        <div className="grid gap-3 p-4 sm:grid-cols-4">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <MetricTile key={index} index={index} />
                          ))}
                        </div>

                        <div className="grid gap-3 p-4 pt-0 sm:grid-cols-[1.08fr_0.92fr]">
                          <div className="rounded-xl border border-white/30 bg-white/[0.9] p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <span className="h-2 w-36 rounded-full bg-[#5b4876]/24" />
                              <span className="h-5 w-10 rounded-full bg-primary/70" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                              <div className="rounded-xl border border-[#160735]/8 bg-white/70 p-3">
                                <ActivityRail />
                                <div className="mt-3 flex items-center gap-2">
                                  <span className="h-2 w-12 rounded-full bg-primary/72" />
                                  <span className="h-2 w-10 rounded-full bg-[#ffb84d]/80" />
                                  <span className="h-2 w-8 rounded-full bg-[#53d4a4]/80" />
                                </div>
                              </div>
                              <div className="rounded-xl border border-[#160735]/8 bg-white/70 p-3">
                                <MicroTable />
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-2">
                              {[0, 1, 2].map((item) => (
                                <span key={item} className="rounded-lg border border-[#160735]/8 bg-white/75 p-2">
                                  <span className="block h-2 rounded-full bg-[#5b4876]/20" />
                                  <span className="mt-2 block h-2 rounded-full bg-primary/60" style={{ width: `${58 + item * 12}%` }} />
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-xl border border-white/30 bg-white/[0.88] p-4">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="h-2 w-28 rounded-full bg-[#5b4876]/24" />
                              <span className="h-5 w-5 rounded-full bg-primary/70" />
                            </div>
                            <BarChart />
                            <MicroTable />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-3 mx-auto w-[215px] md:w-full md:max-w-[252px] md:-translate-y-3 lg:-translate-y-6">
                <div className="rounded-[2rem] border border-white/46 bg-white/24 p-3 shadow-[0_34px_95px_-48px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
                  <div className="relative overflow-hidden rounded-[1.55rem] border border-white/38 bg-white/[0.34] shadow-[inset_0_1px_0_rgba(255,255,255,0.44)]">
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/28 to-transparent" />
                    <div className="relative min-h-[390px] px-4 pb-5 pt-7">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="h-7 w-7 rounded-full bg-white/72" />
                        <span className="h-2 w-20 rounded-full bg-white/62" />
                        <span className="h-7 w-7 rounded-full bg-white/58" />
                      </div>
                      <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-2xl bg-white/74 p-3 shadow-[0_22px_60px_-38px_rgba(97,6,235,0.8)]">
                        <img src="/qr-3d.png" alt="INSEAT table QR code" className="h-full w-full object-contain" />
                      </div>
                      <div className="mx-auto mb-4 h-px w-28 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_rgba(97,6,235,0.82)]" />
                      <div className="rounded-2xl border border-white/60 bg-white/86 p-4 shadow-[0_20px_60px_-40px_rgba(20,7,53,0.75)]">
                        <Barcode />
                        <div className="mt-4 grid grid-cols-[1fr_2.1rem] gap-2">
                          <span className="block h-8 rounded-xl bg-gradient-to-r from-primary to-primary/45" />
                          <span className="block h-8 rounded-xl bg-[#53d4a4]/55" />
                        </div>
                      </div>
                      <div className="mt-3 space-y-2.5">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div key={index} className="rounded-2xl border border-white/50 bg-white/74 p-3 shadow-[0_18px_50px_-38px_rgba(20,7,53,0.7)]">
                            <span className="block h-2.5 w-2/3 rounded-full bg-[#5b4876]/24" />
                            <span className="mt-2 block h-6 rounded-lg bg-gradient-to-r from-primary to-primary/64" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
