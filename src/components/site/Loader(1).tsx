import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { salao } from "@/data/site";
import logo from "@/assets/logo.png";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1000);
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
            className="flex flex-col items-center text-center"
          >
            <motion.img
              src={logo}
              alt={salao.nome}
              width={96}
              height={96}
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-20 w-20 rounded-full object-cover shadow-soft-lg sm:h-24 sm:w-24"
            />
            <span className="mt-6 font-serif text-xl uppercase tracking-[0.4em] text-foreground sm:text-2xl">
              {salao.nome}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 block h-px w-40 origin-left bg-clay"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
