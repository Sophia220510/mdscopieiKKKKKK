import { motion } from "motion/react";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="bg-sand py-24 sm:py-32 lg:py-40">
      <div className="container-site text-center">
        <Reveal>
          <span className="text-[0.7rem] uppercase tracking-[0.32em] text-clay">
            Vamos conversar
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-[1.12] text-foreground sm:text-5xl">
            Agende seu horário agora mesmo
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Entre em contato pelo WhatsApp e reserve seu atendimento.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.035, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-whatsapp px-10 py-5 text-[0.78rem] uppercase tracking-[0.16em] text-whatsapp-foreground shadow-soft-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
