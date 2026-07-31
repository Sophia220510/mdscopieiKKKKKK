import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { salao } from "@/data/site";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] grid place-items-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="font-serif text-2xl uppercase tracking-[0.4em] text-foreground">
              {salao.nome}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 block h-px w-40 origin-left bg-clay"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
