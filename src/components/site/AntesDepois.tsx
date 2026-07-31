import { transformacoes, whatsappLink } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function AntesDepois() {
  return (
    <section id="transformacoes" className="bg-mist py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Antes e Depois"
          title="Transformações reais, feitas com calma"
          description="Passe o mouse (ou toque) sobre cada foto para ver o resultado final."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {transformacoes.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.09}>
              <figure className="group relative overflow-hidden rounded-2xl bg-card shadow-soft">
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={item.antes}
                    alt={`Antes — ${item.titulo}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <img
                    src={item.depois}
                    alt={`Depois — ${item.titulo}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
                    Antes
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-primary-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Depois
                  </span>
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-6 py-5">
                  <span className="font-serif text-xl text-foreground">{item.titulo}</span>
                  <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.servico}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-foreground/20 px-8 py-4 text-[0.72rem] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-accent/60"
            >
              Ver mais transformações
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
