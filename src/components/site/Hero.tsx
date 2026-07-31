import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import heroImg from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 110]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-mist pt-28 pb-16 lg:pt-24 lg:pb-0"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-sand lg:block" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="text-[0.7rem] uppercase tracking-[0.36em] text-clay"
          >
            Bem-vindo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease }}
            className="mt-7 font-serif text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[4.2rem]"
          >
            Cuidamos da sua beleza com carinho e profissionalismo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease }}
            className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Somos um salão localizado no centro de São Paulo oferecendo cortes,
            coloração, manicure, escova e muito mais, sempre com atendimento
            personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 whitespace-nowrap text-[0.74rem] uppercase tracking-[0.16em] text-primary-foreground shadow-soft transition-shadow duration-300 hover:shadow-soft-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar pelo WhatsApp
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 py-4 whitespace-nowrap text-[0.74rem] uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-foreground/50 hover:bg-accent/50"
            >
              Conheça nossos serviços
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.85, ease }}
          className="relative lg:h-[86vh]"
        >
          <div className="relative h-[58vh] overflow-hidden rounded-t-[999px] rounded-b-2xl sm:h-[70vh] lg:h-full">
            <motion.img
              src={heroImg}
              alt="Mulher com cabelo bem cuidado no salão Atelier Lumière"
              width={1008}
              height={1408}
              style={{ y, scale }}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease }}
            className="absolute -bottom-6 left-4 rounded-xl bg-card px-6 py-5 shadow-soft-lg sm:left-8"
          >
            <p className="font-serif text-3xl text-foreground">+12</p>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              anos no centro de SP
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
