import {
  MessageCircleCheck,
  Globe,
  RefreshCw,
  Layout,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const products = [
  {
    icon: MessageCircleCheck,
    title: "Automação Anti No-Show",
    description:
      "Confirma consultas automaticamente no WhatsApp no momento do agendamento. Dispara lembretes antes da data e avisa a recepção caso o paciente cancele, abrindo vaga para reencaixes rápidos.",
    features: [
      "Confirmação automática no agendamento",
      "Lembretes programáveis",
      "Notificação de cancelamento",
    ],
    highlight: true,
  },
  {
    icon: Globe,
    title: "Site e Formulário Próprio",
    description:
      "Substitua formulários genéricos por um site com a identidade visual da sua clínica. O paciente agenda direto, e sua equipe elimina planilhas e preenchimento manual.",
    features: [
      "Identidade visual da clínica",
      "Agendamento direto pelo paciente",
      "Integração automática com o WhatsApp",
    ],
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Reativação Semestral",
    description:
      "Identifique pacientes sem consultas há mais de 6 meses e envie mensagens personalizadas convidando-os a voltar para check-ups ou novos atendimentos.",
    features: [
      "Identificação automática de inativos",
      "Mensagens personalizadas",
      "Recuperação recorrente",
    ],
    highlight: false,
  },
  {
    icon: Layout,
    title: "Páginas de Portfólio",
    description:
      "Apresente os serviços da sua clínica de forma clara e organizada. O paciente entende as especialidades disponíveis antes mesmo de agendar.",
    features: [
      "Vitrine digital de serviços",
      "Especialidades organizadas",
      "Experiência de agendamento guiada",
    ],
    highlight: false,
  },
];

export function Products() {
  return (
    <section id="solucoes" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-emerald-light">
            Produtos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate sm:text-4xl">
            Tudo que sua clínica precisa para não perder pacientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluções integradas no WhatsApp que trabalham 24h para manter sua
            agenda cheia e sua recepção leve.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.title}
              className={`group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:shadow-emerald/5 ${
                product.highlight ? "ring-2 ring-emerald-light" : ""
              }`}
            >
              {product.highlight && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-emerald-light px-3 py-1 text-xs font-semibold text-white">
                  Principal
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10">
                  <product.icon className="h-6 w-6 text-emerald" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate">
                  {product.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate/80"
                    >
                      <ArrowRight className="h-4 w-4 text-emerald-light" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
