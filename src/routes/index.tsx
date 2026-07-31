import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Servicos } from "@/components/site/Servicos";
import { AntesDepois } from "@/components/site/AntesDepois";
import { Equipe } from "@/components/site/Equipe";
import { Avaliacoes } from "@/components/site/Avaliacoes";
import { Diferenciais } from "@/components/site/Diferenciais";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloating } from "@/components/site/WhatsAppButton";
import { Loader } from "@/components/site/Loader";
import { salao } from "@/data/site";

const title = "Atelier Lumière — Salão de Beleza no Centro de São Paulo";
const description =
  "Salão de beleza no centro de São Paulo: cortes, coloração, escova, manicure, barbearia e tratamentos com atendimento personalizado. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: salao.nome,
          description,
          telephone: `+55${salao.whatsapp.slice(2)}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Barão de Itapetininga, 120",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <AntesDepois />
        <Equipe />
        <Avaliacoes />
        <Diferenciais />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
