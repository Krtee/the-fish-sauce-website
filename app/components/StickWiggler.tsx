"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React from "react";

export interface StickWigglerProps {
  children?: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}
const StickWiggler: React.FC<StickWigglerProps> = ({
  children,
  className,
  reverse,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.div
      animate={{
        rotate: reverse ? [-10, 10] : [10, -10],
      }}
      style={{ y }}
      transition={{
        duration: 0.01,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        repeatDelay: 1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StickWiggler;
