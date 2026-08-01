import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFloating() {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 340, damping: 20 } }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-whatsapp/85 text-whatsapp-foreground shadow-soft-lg backdrop-blur-md sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="relative h-7 w-7 drop-shadow-sm" />

      <AnimatePresence>
        {hovering && (
          <motion.span
            initial={{ opacity: 0, x: 8, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-border/60 bg-background/90 px-4 py-2 text-[0.7rem] uppercase tracking-[0.12em] text-foreground shadow-soft backdrop-blur-md"
          >
            Fale conosco
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.9 9.9 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.06.8.82-2.99-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.41 5.84c0 4.56-3.7 8.25-8.31 8.25Zm4.52-6.18c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
