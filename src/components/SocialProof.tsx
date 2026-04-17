import { motion } from 'framer-motion';

const testimonials = [
  {
    company: 'Cinemacity',
    quote:
      '"Inseat transformed how we handle peak hours. We\'ve seen a 20% increase in table turnover since switching to their QR ordering system."',
  },
  {
    company: 'Managr',
    quote:
      '"The AI menu import saved us weeks of manual work. We were up and running across three locations in just 48 hours."',
  },
];

const SocialProof = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Social Proof
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            Trusted by Leading Operators
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.1fr_0.8fr]">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl bg-secondary p-8 text-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.7)]"
            >
              <p className="text-lg leading-8 text-white/90">{item.quote}</p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                {item.company}
              </footer>
            </motion.blockquote>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-3xl border border-primary/10 bg-[#f7f4ff] p-8 text-secondary"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Measurable Impact
            </p>
            <p className="mt-8 text-5xl font-bold tracking-tight">31%</p>
            <p className="mt-3 text-xl font-semibold">Reduction in order errors</p>
            <p className="mt-3 leading-7 text-secondary/70">
              within the first month of switching to Inseat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
