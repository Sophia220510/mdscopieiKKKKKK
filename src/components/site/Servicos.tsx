import { motion } from "motion/react";
import { Droplets, Hand, Palette, Scissors, Sparkle, Wind } from "lucide-react";
import { servicos } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AmbientGlow } from "./AmbientGlow";

const icons = { Scissors, Wind, Palette, Hand, Sparkle, Droplets };

export function Servicos() {
  return (
    <section id="servicos" className="relative isolate bg-background py-24 sm:py-32 lg:py-40">
      <AmbientGlow variant="soft" className="opacity-70" />
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-shadow duration-500 hover:border-clay/30 hover:shadow-soft-lg sm:p-10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-clay transition-[background-color,transform,rotate] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-nude">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl text-foreground transition-transform duration-500 group-hover:translate-x-0.5">
                    {servico.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {servico.descricao}
                  </p>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-clay/40 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
