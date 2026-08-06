import { ArrowRight, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import heroImage from "@/assets/hero-phone.jpg";

const benefits = [
  "Redução de 20-30% para menos de 10% de faltas",
  "Confirmações e lembretes automáticos no WhatsApp",
  "Reativação de pacientes inativos sem esforço",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-emerald-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-light" />
              </span>
              <span className="text-sm font-medium text-emerald">
                Automação no WhatsApp para clínicas
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-slate sm:text-5xl lg:text-6xl">
              Menos faltas, mais consultas,{" "}
              <span className="text-emerald">mais resultado</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Vento automatiza o atendimento da sua clínica no WhatsApp:
              confirmações, lembretes, reativação de pacientes e site próprio.
              Tudo para reduzir o absenteísmo e liberar sua recepção.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-light" />
                  <span className="text-slate/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton
                message="Olá! Gostaria de uma simulação do impacto financeiro do no-show na minha clínica."
                size="lg"
              >
                Simular impacto no meu negócio
                <ArrowRight className="h-5 w-5" />
              </WhatsAppButton>

              <a
                href="#simulador"
                className="text-center text-sm font-medium text-emerald underline-offset-4 hover:underline"
              >
                Calcular perda mensal no simulador
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Atendimento humanizado via WhatsApp · Sem treinamento complexo
            </p>
          </div>

          <div className="relative mx-auto max-w-md lg:max-w-full">
            <div className="relative rounded-3xl bg-white p-4 shadow-2xl shadow-emerald/10">
              <img
                src={heroImage}
                alt="Smartphone mostrando confirmação automática de consulta via WhatsApp"
                className="w-full rounded-2xl"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-lg lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10">
                  <span className="font-display text-xl font-bold text-emerald">
                    -65%
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-slate">
                    Redução de faltas
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Em média nas clínicas parceiras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
