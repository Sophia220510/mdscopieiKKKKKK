import { useEffect } from "react";

/**
 * Scroll suave com inércia, no espírito do Lenis, sem adicionar dependências.
 *
 * Sempre lê a posição real de scroll a cada frame (nunca guarda estado
 * "otimista"), então nunca desincroniza de cliques em âncoras, navegação por
 * teclado ou do próprio scroll nativo — ele apenas amortece o gesto da roda
 * do mouse. Desativado em touch (mobile já tem inércia nativa) e quando o
 * usuário prefere movimento reduzido.
 */
export function SmoothScroll() {
  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarsePointer || reducedMotion) return;

    let target = window.scrollY;
    let scrolling = false;
    let rafId = 0;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const step = () => {
      const current = window.scrollY;
      const diff = target - current;

      if (Math.abs(diff) < 0.4) {
        window.scrollTo(0, target);
        scrolling = false;
        return;
      }

      window.scrollTo(0, current + diff * 0.12);
      rafId = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      // Deixa passar gestos de pinça/zoom e rolagem horizontal intencional.
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      event.preventDefault();

      if (!scrolling) target = window.scrollY;
      target = Math.min(Math.max(target + event.deltaY, 0), maxScroll());

      if (!scrolling) {
        scrolling = true;
        rafId = requestAnimationFrame(step);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
