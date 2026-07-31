import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { salao, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-background">
      <div className="container-site grid gap-14 py-20 lg:grid-cols-4 lg:gap-10 lg:py-24">
        <div className="lg:col-span-1">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="" loading="lazy" width={512} height={512} className="h-9 w-9 shrink-0 object-contain" />
            <span className="truncate font-serif text-lg uppercase tracking-[0.18em] text-foreground">
              {salao.nome}
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {salao.slogan}. Um espaço pequeno, acolhedor e feito para você se
            sentir bem.
          </p>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
            Contato
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" strokeWidth={1.4} />
              <span>{salao.endereco}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay" strokeWidth={1.4} />
              <a href={`tel:+55${salao.whatsapp.slice(2)}`} className="link-underline">
                {salao.telefone}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="link-underline">
                Falar no WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-clay" strokeWidth={1.4} />
              <a href={salao.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                {salao.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
            Horários
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-foreground/85">
            {salao.horarios.map((h) => (
              <li key={h.dia} className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" strokeWidth={1.4} />
                <span>
                  <span className="block">{h.dia}</span>
                  <span className="text-muted-foreground">{h.hora}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
            Como chegar
          </h3>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Mapa do salão"
              src={salao.mapaUrl}
              loading="lazy"
              className="h-48 w-full grayscale"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-7 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {salao.nome}. Todos os direitos reservados.
          </span>
          <span>Centro — São Paulo, SP</span>
        </div>
      </div>
    </footer>
  );
}
