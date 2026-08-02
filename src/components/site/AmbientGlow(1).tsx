import { cn } from "@/lib/utils";

type AmbientGlowProps = {
  className?: string;
  variant?: "warm" | "soft";
};

/**
 * Formas decorativas discretas (blur shapes) para dar profundidade ao fundo
 * das seções, sem chamar atenção. Puramente decorativo — não recebe foco
 * nem interação.
 */
export function AmbientGlow({ className, variant = "warm" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "motion-safe:animate-float-slow absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96",
          variant === "warm" ? "bg-clay/12" : "bg-nude/25",
        )}
      />
      <div
        className={cn(
          "motion-safe:animate-float-slower absolute -right-20 bottom-0 h-80 w-80 rounded-full blur-3xl sm:h-[26rem] sm:w-[26rem]",
          variant === "warm" ? "bg-sand/70" : "bg-clay/10",
        )}
      />
    </div>
  );
}
