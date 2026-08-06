import { useState, useMemo } from "react";
import { Calculator, TrendingDown, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Simulator() {
  const [appointments, setAppointments] = useState(120);
  const [averageTicket, setAverageTicket] = useState(250);
  const [noShowRate, setNoShowRate] = useState(25);

  const calculations = useMemo(() => {
    const monthlyNoShows = Math.round(appointments * (noShowRate / 100));
    const monthlyLoss = monthlyNoShows * averageTicket;
    const preventedNoShows = Math.round(monthlyNoShows * 0.65);
    const monthlySavings = preventedNoShows * averageTicket;
    const annualSavings = monthlySavings * 12;
    return {
      monthlyNoShows,
      monthlyLoss,
      preventedNoShows,
      monthlySavings,
      annualSavings,
    };
  }, [appointments, averageTicket, noShowRate]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section id="simulador" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-emerald-light">
            Simulador
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate sm:text-4xl">
            Quanto o no-show está custando à sua clínica?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ajuste os números abaixo e veja o quanto a Vento pode recuperar do
            seu faturamento mensal.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Card className="border-border bg-white">
            <CardContent className="space-y-8 p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-display font-medium text-slate">
                    Agendamentos mensais
                  </label>
                  <span className="rounded-lg bg-emerald/10 px-3 py-1 font-display font-semibold text-emerald">
                    {appointments}
                  </span>
                </div>
              <Slider
                value={[appointments]}
                onValueChange={(value) => value[0] !== undefined && setAppointments(value[0])}
                min={20}
                max={500}
                step={10}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-display font-medium text-slate">
                  Ticket médio da consulta
                </label>
                <span className="rounded-lg bg-emerald/10 px-3 py-1 font-display font-semibold text-emerald">
                  {formatCurrency(averageTicket)}
                </span>
              </div>
              <Slider
                value={[averageTicket]}
                onValueChange={(value) => value[0] !== undefined && setAverageTicket(value[0])}
                min={80}
                max={800}
                step={10}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-display font-medium text-slate">
                  Taxa atual de no-show
                </label>
                <span className="rounded-lg bg-emerald/10 px-3 py-1 font-display font-semibold text-emerald">
                  {noShowRate}%
                </span>
              </div>
              <Slider
                value={[noShowRate]}
                onValueChange={(value) => value[0] !== undefined && setNoShowRate(value[0])}
                min={5}
                max={40}
                step={1}
              />
            </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center gap-6">
            <Card className="border-l-4 border-l-destructive bg-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Prejuízo mensal estimado
                  </p>
                  <p className="font-display text-2xl font-bold text-slate">
                    {formatCurrency(calculations.monthlyLoss)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {calculations.monthlyNoShows} faltas por mês
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-light bg-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10">
                  <DollarSign className="h-6 w-6 text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Economia mensal estimada com a Vento
                  </p>
                  <p className="font-display text-2xl font-bold text-emerald">
                    {formatCurrency(calculations.monthlySavings)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(calculations.annualSavings)} por ano
                  </p>
                </div>
              </CardContent>
            </Card>

            <WhatsAppButton
              message={`Olá! Fiz a simulação na landing page e o no-show está custando cerca de ${formatCurrency(calculations.monthlyLoss)} por mês na minha clínica. Gostaria de entender como a Vento pode ajudar.`}
              size="lg"
              className="w-full justify-center"
            >
              <Calculator className="h-5 w-5" />
              Receber proposta com esses números
            </WhatsAppButton>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          *Cálculo estimado com base em redução média de 65% nas faltas observada
          em clínicas parceiras. Valores podem variar conforme a realidade de
          cada negócio.
        </p>
      </div>
    </section>
  );
}
