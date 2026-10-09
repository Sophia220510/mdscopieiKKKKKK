// Swiper 8 matches the reference CSS. Its root export omits types under Bundler
// resolution, while its dedicated types subpath remains available.
declare module "swiper" {
  import type { SwiperModule } from "swiper/types";
  export { Swiper as default } from "swiper/types";
  export const A11y: SwiperModule;
  export const Autoplay: SwiperModule;
  export const Keyboard: SwiperModule;
  export const Navigation: SwiperModule;
  export const Pagination: SwiperModule;
}
