import { Smartphone, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Conectamos seu WhatsApp",
    description:
      "Integramos o número da clínica em poucos minutos. Nada de trocar chip ou instalar hardware.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configuramos as mensagens",
    description:
      "Definimos confirmações, lembretes, reativações e respostas automáticas com a voz da sua clínica.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Você acompanha os resultados",
    description:
      "Monitore taxa de confirmação, faltas evitadas e retorno de pacientes inativos em um painel simples.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-emerald-light">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate sm:text-4xl">
            Três passos para parar de perder consultas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Implementação rápida, sem treinamento complicado e sem interromper a
            rotina da sua equipe.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute -top-4 left-8 flex h-8 w-12 items-center justify-center rounded-lg bg-emerald font-display text-sm font-bold text-white">
                {step.number}
              </div>
              <div className="mb-6 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10">
                <step.icon className="h-7 w-7 text-emerald" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
