import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
  service: string;
  className?: string;
};

const CLAMP = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Slider "Antes / Depois" interativo.
 *
 * - Pointer Events única implementação para mouse e touch (sem hover, sem hacks mobile).
 * - Posição controlada via CSS custom property + transform, evitando re-render a cada frame.
 * - Dica de interatividade (micro animação) exibida uma única vez, na primeira aparição em tela.
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  service,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(50);
  const draggingRef = useRef(false);
  const hasHintedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const applyPosition = useCallback((value: number) => {
    const el = containerRef.current;
    if (!el) return;
    positionRef.current = value;
    el.style.setProperty("--pos", `${value}%`);
  }, []);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ratio = ((clientX - rect.left) / rect.width) * 100;
      applyPosition(CLAMP(ratio, 0, 100));
    },
    [applyPosition]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;
      el.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      setIsDragging(true);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (el && el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    draggingRef.current = false;
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const step = e.shiftKey ? 10 : 3;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        applyPosition(CLAMP(positionRef.current - step, 0, 100));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        applyPosition(CLAMP(positionRef.current + step, 0, 100));
      } else if (e.key === "Home") {
        e.preventDefault();
        applyPosition(0);
      } else if (e.key === "End") {
        e.preventDefault();
        applyPosition(100);
      }
    },
    [applyPosition]
  );

  // Micro animação de dica, disparada uma única vez quando o componente entra em tela.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasHintedRef.current) {
          hasHintedRef.current = true;
          el.classList.add("bas-hint");
          const onEnd = () => el.classList.remove("bas-hint");
          el.addEventListener("animationend", onEnd, { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg ${className ?? ""}`}
    >
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label={`Comparação antes e depois — ${title}. Use as setas do teclado para ajustar.`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        aria-orientation="horizontal"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={handleKeyDown}
        style={{ "--pos": "50%" } as React.CSSProperties}
        className={`bas-root relative aspect-4/5 w-full touch-none select-none overflow-hidden outline-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* Imagem "Depois" — camada base, sempre visível por completo */}
        <img
          src={afterImage}
          alt={`Depois — ${title}`}
          loading="lazy"
          decoding="async"
          width={800}
          height={1000}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        {/* Imagem "Antes" — mesmo tamanho da base, recortada via clip-path (sem distorcer a imagem) */}
        <img
          src={beforeImage}
          alt={`Antes — ${title}`}
          loading="lazy"
          decoding="async"
          width={800}
          height={1000}
          draggable={false}
          className="bas-before-img pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}
        />

        {/* Vinheta sutil */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

        {/* Labels fixos nos cantos superiores */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
          Antes
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-primary-foreground">
          Depois
        </span>

        {/* Linha divisória + handle */}
        <div
          className="bas-divider pointer-events-none absolute inset-y-0 z-10 w-px bg-background/90"
          style={{ left: "var(--pos)" }}
        >
          <div
            className={`bas-handle pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 text-foreground ring-1 ring-border/60 backdrop-blur-sm transition-transform duration-200 ${
              isDragging ? "scale-110" : "scale-100"
            }`}
          >
            <MoveHorizontal className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>

      <figcaption className="flex items-baseline justify-between gap-3 px-6 py-5">
        <span className="font-serif text-xl text-foreground">{title}</span>
        <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
          {service}
        </span>
      </figcaption>
    </figure>
  );
}
