import { Star } from "lucide-react";
import { avaliacoes } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Avaliacoes() {
  const lista = [...avaliacoes, ...avaliacoes];

  return (
    <section id="avaliacoes" className="overflow-hidden bg-mist py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Avaliações"
          title="O que dizem nossas clientes"
          description="Depoimentos de quem já passou pela nossa cadeira."
        />
      </div>

      <div className="group relative mt-16 lg:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-mist to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-mist to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]">
          {lista.map((avaliacao, i) => (
            <article
              key={`${avaliacao.nome}-${i}`}
              className="w-[19rem] shrink-0 rounded-2xl border border-border/70 bg-card p-8 shadow-soft sm:w-[22rem]"
            >
              <div className="flex gap-1 text-clay">
                {Array.from({ length: avaliacao.nota }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                “{avaliacao.texto}”
              </p>
              <p className="mt-6 font-serif text-lg text-foreground">{avaliacao.nome}</p>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                Avaliação Google
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
