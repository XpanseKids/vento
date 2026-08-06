import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-emerald px-8 py-16 text-center sm:px-16 lg:px-20">
          <Quote className="absolute top-8 left-8 h-16 w-16 text-white/20" />

          <blockquote className="relative z-10">
            <p className="font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              "A Vento mudou nossa rotina. Antes a recepção passava horas em
              ligações. Hoje as confirmações acontecem no WhatsApp e nossa taxa
              de faltas caiu de 28% para 8%."
            </p>
          </blockquote>

          <div className="relative z-10 mt-8">
            <p className="font-display text-lg font-semibold text-white">
              Dra. Fernanda Lima
            </p>
            <p className="text-white/80">
              Clínica Integrare — São Paulo, SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
