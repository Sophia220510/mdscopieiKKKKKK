import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, salao, whatsappLink } from "@/data/site";
import { PremiumCTA } from "./PremiumCTA";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-500 ${
        scrolled || open
          ? "bg-background/80 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-site grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt=""
            decoding="async"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-foreground/10 shadow-soft"
          />
          <span className="truncate font-serif text-lg tracking-[0.18em] uppercase text-foreground">
            {salao.nome}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline relative pb-1 text-[0.78rem] uppercase tracking-[0.14em] transition-colors",
                  isActive ? "text-foreground" : "text-foreground/75 hover:text-foreground",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-clay"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <PremiumCTA
            href={whatsappLink}
            variant="solid"
            className="px-6 py-3 text-[0.72rem] shadow-none"
          >
            Agendar pelo WhatsApp
          </PremiumCTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-site flex flex-col gap-1 pb-6 pt-5">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-border/60 py-3 text-sm uppercase tracking-[0.14em] transition-colors",
                      isActive ? "text-foreground" : "text-foreground/80",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex justify-center rounded-full bg-primary px-6 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-primary-foreground"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
