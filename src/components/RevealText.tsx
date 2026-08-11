"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export default function RevealText({
  text,
  delay = 0,
  className = "",
  as: Component = "div",
}: RevealTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Metni kelimelere böl, boşlukları koru
  const words = text.split(" ");

  return (
    <Component className={className} ref={ref}>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em", display: "inline-block" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  );
}
