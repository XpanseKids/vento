# Landing Page Vento — Plano de Implementação

## Visão geral
Criar uma landing page de conversão para a Vento, empresa de automação de atendimento via WhatsApp para clínicas e consultórios. A página deve comunicar claramente a redução de no-show, apresentar os produtos e direcionar o visitante para contato via WhatsApp.

## Decisões de design aprovadas
- **Paleta de cores:** verde esmeralda profundo (`#0F766E`) como primária, slate (`#1E293B`) para títulos e textos fortes, verde brilhante (`#10B981`) como destaque/CTA, fundo `slate-50` (`#F8FAFC`) e branco (`#FFFFFF`) para superfícies.
- **Tipografia:** heading `Outfit`, body `Figtree`.
- **Layout:** full-width sections — seções empilhadas em faixas largas, com alternância de fundo branco e cinza claro para ritmo visual.

## Estrutura da página
1. **Hero full-width** — headline focada em redução de absenteísmo, subtítulo com simulação de impacto financeiro, CTA principal para WhatsApp, imagem/ilustração de celular com notificações do WhatsApp.
2. **Prova de valor / métricas** — faixa com números: "20% a 30% de no-show" vs "menos de 10% com a Vento".
3. **Produtos e soluções** — 4 seções em cards horizontais (Anti No-Show, Site/Formulário Próprio, Reactivação Semestral, Páginas de Portfólio).
4. **Como funciona** — 3 passos simples: conectar WhatsApp, configurar mensagens, acompanhar resultados.
5. **Benefícios para clínicas** — grid com: economia de tempo, mais confirmações, reocupação de horários, reativação de pacientes.
6. **Simulador de impacto financeiro** — componente interativo (sem backend) onde a clínica insere número de agendamentos mensais, ticket médio e taxa atual de no-show; calcula perda mensal e economia potencial com a Vento.
7. **Depoimento / caso de uso** — bloco com citação de uma clínica fictícia usando a Vento (ou genérica).
8. **CTA final + FAQ** — chamada para WhatsApp e acordeão com 3-4 perguntas frequentes.
9. **Footer** — logo Vento, links rápidos, contato WhatsApp e direitos autorais.

## Elementos interativos
- Simulador de impacto financeiro com sliders/inputs e cálculo em tempo real.
- FAQ acordeão (usando shadcn Accordion).
- Botões de CTA para WhatsApp com mensagem pré-preenchida.
- Smooth scroll para âncoras internas.

## Metadados e SEO
- Título: "Vento — Automação de Atendimento para Clínicas | Reduza No-Show"
- Descrição: "Reduza faltas de pacientes com automação no WhatsApp. Confirmações, lembretes, reativação e site próprio para clínicas e consultórios."
- Og tags, canonical e JSON-LD para Organization configurados na rota raiz.

## Design tokens a serem definidos
- Primary: `#0F766E`
- Primary-foreground: `#FFFFFF`
- Accent: `#10B981`
- Background: `#F8FAFC`
- Card: `#FFFFFF`
- Foreground: `#1E293B`
- Muted: `#F1F5F9`
- Muted-foreground: `#64748B`
- Border: `#E2E8F0`
- Radius: `0.75rem` (12px) — amigável e moderno

## Arquivos envolvidos
- `src/routes/index.tsx` — landing page principal
- `src/styles.css` — tokens de cor e tipografia
- `src/routes/__root.tsx` — ajuste do head default
- `src/components/sections/*` — componentes das seções (hero, produtos, simulador, FAQ, footer)
- `public/` — imagem de hero ou favicon, se necessário

## Imagem
- Gerar uma ilustração premium do celular com notificações de WhatsApp flutuantes, em estilo clean 3D, usando tons verde esmeralda e branco, para o hero da landing page.
