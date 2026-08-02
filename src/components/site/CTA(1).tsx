import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import { Reveal } from "./Reveal";
import { PremiumCTA } from "./PremiumCTA";
import { AmbientGlow } from "./AmbientGlow";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-24 sm:py-32 lg:py-40">
      <AmbientGlow variant="soft" />
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
          <div className="mt-12 flex justify-center">
            <PremiumCTA
              href={whatsappLink}
              variant="whatsapp"
              className="px-10 py-5 text-[0.78rem]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </PremiumCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
