import { motion } from 'framer-motion';

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174';

const highlights = [
  {
    label: 'Reservation Management',
    description: 'Create, update, and track reservations with consistent status handling in one workflow.',
  },
  {
    label: 'Venue Availability',
    description: 'Check availability by venue and control booking operations from centralized routes.',
  },
  {
    label: 'Guest Booking Flow',
    description: 'Support guest-facing booking flows with reservation status tracking and follow-up actions.',
  },
];

const ReservationCallReceptionist = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side — reservation mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              {/* Mini reservation form preview */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-white/30">reservations.inseat.app</span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/40 mb-1.5">Date</p>
                  <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-sm text-white/60">
                    Selected Date
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-white/40 mb-1.5">Time</p>
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-sm text-white/60">
                      7:30 PM
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-1.5">Guests</p>
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-sm text-white/60">
                      4 people
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1.5">Special requests</p>
                  <div className="h-16 rounded-lg bg-white/5 border border-white/10 flex items-start px-3 pt-2.5 text-sm text-white/40">
                    Window seat preferred...
                  </div>
                </div>
                <div className="h-10 rounded-lg bg-primary flex items-center justify-center text-sm font-semibold text-white">
                  Confirm Reservation
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Reservations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Run reservations with less friction
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg">
              Built-in reservation routes, availability checks, and status tracking help your team keep service predictable.
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`${ADMIN_URL}/register?plan=mid`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-10 text-primary font-semibold text-sm hover:underline"
            >
              Get started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCallReceptionist;
