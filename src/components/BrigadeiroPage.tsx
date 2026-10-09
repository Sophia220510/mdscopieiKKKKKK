import { useEffect, useRef } from "react";
import Swiper, { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import sections from "@/data/brigadeiro-sections.json";

// Preserve Elementor's structure and responsive styles; edit each named section in the JSON.
const markup = sections.map((section) => section.html).join("\n");

interface CarouselSettings {
  slides_to_show?: string;
  slides_to_show_tablet?: string;
  slides_to_show_mobile?: string;
  slides_to_scroll?: string;
  slides_to_scroll_mobile?: string;
  autoplay_speed?: number;
  speed?: number;
  autoplay?: string;
  infinite?: string;
  image_spacing_custom?: { size: number };
}

export function BrigadeiroPage() {
  const pageRef = useRef<HTMLElement>(null);
  const checkoutRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const carousels: Swiper[] = [];
    page.querySelectorAll<HTMLElement>(".elementor-widget-image-carousel").forEach((widget) => {
      const element = widget.querySelector<HTMLElement>(".swiper");
      if (!element) return;
      const settings: CarouselSettings = JSON.parse(widget.dataset["settings"] || "{}");
      widget.classList.add("e-widget-swiper");
      const pagination = element.querySelector<HTMLElement>(".swiper-pagination");
      const previous = element.querySelector<HTMLElement>(".elementor-swiper-button-prev");
      const next = element.querySelector<HTMLElement>(".elementor-swiper-button-next");
      carousels.push(
        new Swiper(element, {
          modules: [A11y, Autoplay, Keyboard, Navigation, Pagination],
          slidesPerView: Number(settings.slides_to_show_mobile || 1),
          slidesPerGroup: Number(settings.slides_to_scroll_mobile || 1),
          spaceBetween: settings.image_spacing_custom?.size || 20,
          speed: settings.speed || 500,
          loop: settings.infinite === "yes",
          autoplay:
            settings.autoplay === "yes"
              ? {
                  delay: settings.autoplay_speed || 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }
              : false,
          keyboard: { enabled: true, onlyInViewport: true },
          pagination: pagination ? { el: pagination, clickable: true } : false,
          navigation: previous && next ? { prevEl: previous, nextEl: next } : false,
          a11y: {
            prevSlideMessage: "Slide anterior",
            nextSlideMessage: "Próximo slide",
            paginationBulletMessage: "Ir para o slide {{index}}",
          },
          breakpoints: {
            768: {
              slidesPerView: Number(settings.slides_to_show_tablet || 3),
              slidesPerGroup: Number(settings.slides_to_scroll || 1),
            },
            1025: {
              slidesPerView: Number(settings.slides_to_show || 3),
              slidesPerGroup: Number(settings.slides_to_scroll || 1),
            },
          },
        }),
      );
    });

    const toggle = (title: HTMLElement) => {
      const content = title.nextElementSibling;
      const expanded = title.getAttribute("aria-expanded") !== "true";
      title.classList.toggle("elementor-active", expanded);
      title.setAttribute("aria-expanded", String(expanded));
      content?.classList.toggle("elementor-active", expanded);
      if (content instanceof HTMLElement) content.style.display = expanded ? "block" : "none";
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const title = event.target.closest<HTMLElement>(".elementor-tab-title");
      if (title) {
        event.preventDefault();
        toggle(title);
      }
      if (event.target.closest('a[href*="pay.kiwify.com.br"]')) {
        event.preventDefault();
        checkoutRef.current?.showModal();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.target instanceof Element)) return;
      const title = event.target.closest<HTMLElement>(".elementor-tab-title");
      if (title && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        toggle(title);
      }
    };
    page.addEventListener("click", onClick);
    page.addEventListener("keydown", onKeyDown);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
          const element = entry.target;
          const settings = JSON.parse(element.dataset["settings"] || "{}");
          element.classList.remove("elementor-invisible");
          if (settings._animation && settings._animation !== "none")
            element.classList.add("animated", settings._animation);
          observer.unobserve(element);
        }
      },
      { rootMargin: "80px" },
    );
    page.querySelectorAll(".elementor-invisible").forEach((element) => observer.observe(element));
    return () => {
      carousels.forEach((carousel) => carousel.destroy(true, true));
      observer.disconnect();
      page.removeEventListener("click", onClick);
      page.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <main
        ref={pageRef}
        className="elementor elementor-3518"
        data-elementor-type="wp-page"
        data-elementor-id="3518"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <dialog
        ref={checkoutRef}
        className="school-checkout"
        aria-labelledby="checkout-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) checkoutRef.current?.close();
        }}
      >
        <button
          className="school-checkout-close"
          aria-label="Fechar"
          onClick={() => checkoutRef.current?.close()}
        >
          ×
        </button>
        <p className="school-checkout-label">DEMONSTRAÇÃO ESCOLAR</p>
        <h2 id="checkout-title">O Brigadeiro Perfeito</h2>
        <p>Valor simbólico de R$37,00 à vista</p>
        <p>
          Este botão simula a etapa de compra para os testes do projeto. Nenhum pagamento é
          realizado.
        </p>
        <button className="school-checkout-back" onClick={() => checkoutRef.current?.close()}>
          Voltar para o site
        </button>
      </dialog>
    </>
  );
}
