import { createFileRoute } from "@tanstack/react-router";
import { BrigadeiroPage } from "@/components/BrigadeiroPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Brigadeiro Perfeito — reprodução escolar" },
      {
        name: "description",
        content:
          "Projeto escolar O Brigadeiro Perfeito com Larissa, uma confeiteira fictícia criada por IA.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: BrigadeiroPage,
});
