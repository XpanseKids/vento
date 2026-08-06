import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "A Vento substitui a recepção da clínica?",
    answer:
      "Não. A Vento automatiza tarefas repetitivas como confirmações, lembretes e reativação, liberando sua recepção para atender quem está presente e resolver demandas mais complexas.",
  },
  {
    question: "Preciso trocar de número de WhatsApp?",
    answer:
      "Não. Integramos o número que sua clínica já usa. O paciente continua conversando com o mesmo contato, mas agora com respostas e lembretes automatizados.",
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer:
      "A implementação é feita em poucos dias. Após a conexão do WhatsApp, configuramos as mensagens e a clínica já pode começar a enviar confirmações.",
  },
  {
    question: "A automação funciona para qualquer tipo de clínica?",
    answer:
      "Sim. A Vento atende clínicas e consultórios de diversas especialidades, com mensagens personalizadas para cada tipo de agendamento e público.",
  },
  {
    question: "Como faço para saber o impacto financeiro na minha clínica?",
    answer:
      "Use o simulador acima ou fale conosco pelo WhatsApp. Fazemos uma simulação personalizada com base no número de agendamentos, ticket médio e taxa atual de no-show da sua clínica.",
  },
];

export function CtaFaq() {
  return (
    <section id="faq" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-emerald-light">
              Dúvidas
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Não encontrou sua resposta? Fale diretamente conosco no WhatsApp.
            </p>

            <div className="mt-8 hidden lg:block">
              <WhatsAppButton
                message="Olá! Tenho dúvidas sobre a Vento e gostaria de conversar com vocês."
                size="lg"
              >
                Falar com a Vento
                <ArrowRight className="h-5 w-5" />
              </WhatsAppButton>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-slate hover:text-emerald hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-emerald px-8 py-12 text-center sm:px-16">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Pronto para reduzir faltas e recuperar faturamento?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Fale com a gente no WhatsApp e receba uma simulação personalizada do
            impacto financeiro do no-show na sua clínica.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message="Olá! Vi a landing page e gostaria de uma simulação personalizada do impacto do no-show na minha clínica."
              size="lg"
              className="bg-white text-emerald hover:bg-white/90 hover:text-emerald"
            >
              Quero minha simulação gratuita
              <ArrowRight className="h-5 w-5" />
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
