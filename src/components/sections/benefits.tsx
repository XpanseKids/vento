import {
  Clock,
  CalendarCheck,
  RotateCcw,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economia de tempo",
    description:
      "Sua recepção deixa de fazer ligações manuais e ganha horas para atender quem realmente está na clínica.",
  },
  {
    icon: CalendarCheck,
    title: "Mais confirmações",
    description:
      "Pacientes respondem mensagens no WhatsApp muito mais do que atendem ligações de telefone desconhecido.",
  },
  {
    icon: RotateCcw,
    title: "Reocupação de horários",
    description:
      "Quando um paciente cancela, a recepção é avisada imediatamente para reencaixar outra pessoa.",
  },
  {
    icon: Users,
    title: "Reativação de pacientes",
    description:
      "Pacientes inativos recebem mensagens automáticas e voltam para check-ups e novos procedimentos.",
  },
  {
    icon: ShieldCheck,
    title: "Sem treinamento complexo",
    description:
      "A equipe continua usando o WhatsApp. A automação opera por trás, sem painéis difíceis de aprender.",
  },
  {
    icon: Headphones,
    title: "Atendimento humanizado",
    description:
      "Mensagens com a identidade da clínica, tom natural e personalização por nome, data e especialidade.",
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-emerald-light">
            Benefícios
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate sm:text-4xl">
            Por que clínicas escolhem a Vento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resultados concretos para quem quer uma agenda mais preenchida e
            uma equipe menos sobrecarregada.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10">
                <benefit.icon className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
