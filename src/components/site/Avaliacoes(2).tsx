import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { avaliacoes } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 4200;

export function Avaliacoes() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !emblaApi) return;
    autoplayRef.current = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_DELAY);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      stopAutoplay();
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <section id="avaliacoes" className="overflow-hidden bg-mist py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Avaliações"
          title="O que dizem nossas clientes"
          description="Depoimentos de quem já passou pela nossa cadeira. Arraste para o lado para ver mais."
        />
      </div>

      <div
        className="relative mt-16 lg:mt-20"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-mist to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-mist to-transparent sm:w-28" />

        <div ref={emblaRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
          <div className="flex touch-pan-y">
            {avaliacoes.map((avaliacao, i) => (
              <div
                key={`${avaliacao.nome}-${i}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] px-3 sm:basis-1/2 lg:basis-1/3"
              >
                <article
                  className={cn(
                    "h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500",
                    selected === i ? "scale-100 opacity-100" : "scale-[0.97] opacity-80",
                  )}
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {avaliacoes.map((avaliacao, i) => (
            <button
              key={`dot-${avaliacao.nome}-${i}`}
              type="button"
              aria-label={`Ver avaliação de ${avaliacao.nome}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className="group grid h-4 w-4 place-items-center"
            >
              <span
                className={cn(
                  "block rounded-full bg-foreground/25 transition-all duration-[400ms] group-hover:bg-clay/70",
                  selected === i ? "h-2 w-6 bg-clay" : "h-1.5 w-1.5",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
