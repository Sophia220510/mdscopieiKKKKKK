import { Armchair, Award, BadgeCheck, HeartHandshake, MapPin } from "lucide-react";
import { diferenciais } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = { HeartHandshake, BadgeCheck, Armchair, Award, MapPin };

export function Diferenciais() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Simples no tamanho, cuidadoso nos detalhes"
        />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {diferenciais.map((item, i) => {
            const Icon = icons[item.icone as keyof typeof icons];
            return (
              <Reveal as="li" key={item.titulo} delay={i * 0.07}>
                <div className="flex min-w-0 gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-clay">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.4} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-foreground">{item.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
