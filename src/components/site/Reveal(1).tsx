import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Reveal de entrada único e leve: fade + translateY pequeno.
 * Só anima `opacity` e `transform` (aceleradas por GPU), sem filter/blur,
 * sem scale e sem variantes concorrentes — mantém a sensação premium sem
 * pesar no scroll.
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
