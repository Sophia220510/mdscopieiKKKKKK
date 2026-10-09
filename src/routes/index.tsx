import { createFileRoute } from "@tanstack/react-router";
import { BrigadeiroPage } from "@/components/BrigadeiroPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Brigadeiro Perfeito — reprodução escolar" },
      {
        name: "description",
        content:
          "Projeto escolar O Brigadeiro Perfeito com Rafael, um confeiteiro fictício criado por IA.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: BrigadeiroPage,
});
