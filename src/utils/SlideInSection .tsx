"use client";
import { motion } from "framer-motion";

interface SlideInSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export const SlideInSection = ({ children, direction = "left" }: SlideInSectionProps) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
