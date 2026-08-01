import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";
import { equipe, salao, whatsappLink } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Equipe() {
  return (
    <section id="equipe" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Pessoas que cuidam de você"
          description="Um time pequeno, unido e experiente — você sempre sabe quem vai te atender."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {equipe.map((pessoa, i) => (
            <Reveal key={pessoa.nome} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-4 group-hover:ring-sand sm:h-44 sm:w-44">
                  <img
                    src={pessoa.foto}
                    alt={`${pessoa.nome} — ${pessoa.especialidade}`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center gap-3 bg-linear-to-t from-black/55 via-black/5 to-transparent pb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <a
                      href={salao.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${pessoa.nome}`}
                      className="grid h-8 w-8 -translate-y-1 place-items-center rounded-full bg-white/90 text-foreground opacity-0 shadow-soft transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white"
                    >
                      <Instagram className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Falar no WhatsApp sobre ${pessoa.nome}`}
                      className="grid h-8 w-8 -translate-y-1 place-items-center rounded-full bg-white/90 text-foreground opacity-0 shadow-soft transition-all delay-150 duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </a>
                  </div>
                </div>
                <h3 className="mt-7 font-serif text-2xl text-foreground transition-colors duration-[400ms] group-hover:text-clay">
                  {pessoa.nome}
                </h3>
                <p className="mt-2 text-[0.66rem] uppercase tracking-[0.2em] text-clay">
                  {pessoa.especialidade}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {pessoa.descricao}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
