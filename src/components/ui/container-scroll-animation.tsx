"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] py-40 overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16 md:pt-20">
        <motion.div
          style={{ scale: scaleDimensions, opacity: opacity }}
          className="text-center mb-8 px-4"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            scale: scaleDimensions,
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
          }}
          className="w-full max-w-7xl mx-auto px-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
