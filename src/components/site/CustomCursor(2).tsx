import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Cursor personalizado e discreto: um anel que segue o ponteiro com física
 * de mola e reage (aumenta) sobre botões, links, cards e imagens. Usa
 * mix-blend-difference para permanecer legível em qualquer fundo.
 *
 * Só ativa em dispositivos com ponteiro fino (mouse/trackpad) e quando o
 * usuário não pediu movimento reduzido — em touch e a11y ele nunca renderiza.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 26, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 26, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onOver = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      setHovering(!!el?.closest("a, button, [data-cursor-hover]"));
    };

    const onLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ scale: hovering ? 2.4 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}
