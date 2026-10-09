import { createFileRoute } from "@tanstack/react-router";
import { BrigadeiroPage } from "@/components/BrigadeiroPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Brigadeiro Perfeito — reprodução escolar" },
      {
        name: "description",
        content: "Reprodução para estudo do layout e das interações do site O Brigadeiro Perfeito.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: BrigadeiroPage,
});
