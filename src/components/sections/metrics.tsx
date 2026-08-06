import { TrendingDown, TrendingUp, CalendarCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "20-30%",
    label: "Taxa média de no-show sem confirmação ativa",
    tone: "muted",
  },
  {
    icon: TrendingUp,
    value: "< 10%",
    label: "Taxa de faltas com a Vento ativa",
    tone: "positive",
  },
  {
    icon: CalendarCheck,
    value: "65%",
    label: "Redução média no absenteísmo das clínicas",
    tone: "positive",
  },
  {
    icon: Clock,
    value: "+5h",
    label: "Economia semanal na rotina da recepção",
    tone: "positive",
  },
];

export function Metrics() {
  return (
    <section className="bg-emerald py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="font-display text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
