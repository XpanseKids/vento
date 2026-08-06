import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Products } from "@/components/sections/products";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Simulator } from "@/components/sections/simulator";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaFaq } from "@/components/sections/cta-faq";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vento — Automação de Atendimento para Clínicas | Reduza No-Show" },
      {
        name: "description",
        content:
          "Reduza faltas de pacientes com automação no WhatsApp. Confirmações, lembretes, reativação e site próprio para clínicas e consultórios.",
      },
      {
        property: "og:title",
        content: "Vento — Automação de Atendimento para Clínicas | Reduza No-Show",
      },
      {
        property: "og:description",
        content:
          "Reduza faltas de pacientes com automação no WhatsApp. Confirmações, lembretes, reativação e site próprio para clínicas e consultórios.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Vento — Automação de Atendimento para Clínicas" },
      {
        name: "twitter:description",
        content:
          "Reduza faltas de pacientes com automação no WhatsApp. Confirmações, lembretes, reativação e site próprio.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Products />
        <HowItWorks />
        <Benefits />
        <Simulator />
        <Testimonial />
        <CtaFaq />
      </main>
      <Footer />
    </div>
  );
}
