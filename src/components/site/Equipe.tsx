import { motion } from "motion/react";
import { equipe } from "@/data/site";
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
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-4 group-hover:ring-sand sm:h-44 sm:w-44">
                  <img
                    src={pessoa.foto}
                    alt={`${pessoa.nome} — ${pessoa.especialidade}`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-7 font-serif text-2xl text-foreground">{pessoa.nome}</h3>
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
