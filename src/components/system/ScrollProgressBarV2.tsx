import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBarV2() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--v2-accent), var(--v2-accent-2))',
        boxShadow: '0 0 12px rgba(124,92,252,0.5)',
      }}
      aria-hidden="true"
    />
  );
}
