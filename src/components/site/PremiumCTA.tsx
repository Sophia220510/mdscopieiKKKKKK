import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type PremiumCTAProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "whatsapp";
  external?: boolean;
  className?: string;
};

const spring = { type: "spring", stiffness: 340, damping: 22, mass: 0.6 } as const;

const variantClasses: Record<NonNullable<PremiumCTAProps["variant"]>, string> = {
  solid:
    "bg-primary text-primary-foreground shadow-soft hover:shadow-soft-lg",
  outline:
    "border border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-accent/50",
  whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-soft-lg",
};

let rippleId = 0;

/**
 * Botão/CTA premium: profundidade em spring no hover, brilho (sheen)
 * diagonal passando ao hover e ripple discreto ao clicar — tudo com física
 * de mola em vez de easing linear, como pedido no briefing.
 */
export function PremiumCTA({
  href,
  children,
  variant = "solid",
  external = true,
  className,
}: PremiumCTAProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>(
    [],
  );
  const ref = useRef<HTMLAnchorElement>(null);

  const addRipple = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const id = rippleId++;
    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerDown={addRipple}
      whileHover={{ y: -3, scale: 1.015, transition: spring }}
      whileTap={{ scale: 0.96, transition: spring }}
      className={cn(
        "btn-sheen group relative inline-flex cursor-pointer items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.74rem] whitespace-nowrap uppercase tracking-[0.16em] transition-colors duration-300",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="animate-ripple pointer-events-none absolute z-0 rounded-full bg-white/45"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </motion.a>
  );
}
