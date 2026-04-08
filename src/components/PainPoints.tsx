import { motion } from 'framer-motion';

const painPoints = [
  {
    problem: 'Drowning in Paper?',
    solution:
      'Digital orders go straight to the kitchen. No lost tickets, no handwriting errors.',
  },
  {
    problem: 'Slow Table Turns?',
    solution:
      'Guests order and pay instantly. Get the next party seated 15 minutes faster.',
  },
  {
    problem: 'Menu Chaos?',
    solution:
      'Update prices or items across all locations in one click. No more "sorry, we\'re out of that."',
  },
];

const PainPoints = () => {
  return (
    <section className="bg-[#f7f4ff] py-20 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The Pain Is Real
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            Is Your Restaurant Running You?
          </h2>
          <p className="mt-5 text-lg text-secondary/70">
            Stop letting manual processes and disconnected tools eat into your margins.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-primary/10 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(97,6,235,0.45)]"
            >
              <p className="mb-4 text-lg font-semibold text-secondary">{item.problem}</p>
              <p className="leading-7 text-secondary/70">{item.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
