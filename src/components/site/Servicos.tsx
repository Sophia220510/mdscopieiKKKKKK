import { motion } from "motion/react";
import { Droplets, Hand, Palette, Scissors, Sparkle, Wind } from "lucide-react";
import { servicos } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = { Scissors, Wind, Palette, Hand, Sparkle, Droplets };

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que seu cabelo e suas unhas precisam"
          description="Um cardápio enxuto e bem executado, com produtos profissionais e tempo dedicado a cada cliente."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {servicos.map((servico, i) => {
            const Icon = icons[servico.icone as keyof typeof icons];
            return (
              <Reveal key={servico.titulo} delay={i * 0.07}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full rounded-2xl border border-border/70 bg-card p-8 transition-shadow duration-500 hover:shadow-soft-lg sm:p-10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-clay transition-colors duration-500 group-hover:bg-nude">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl text-foreground">
                    {servico.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {servico.descricao}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
