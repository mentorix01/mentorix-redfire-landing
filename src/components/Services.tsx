import { Target, TrendingUp, Users, Megaphone, BarChart3, Rocket } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Posicionamento Estratégico",
    description: "Defina seu nicho e se torne a referência absoluta no seu mercado de mentoria.",
  },
  {
    icon: TrendingUp,
    title: "Funil de Alta Conversão",
    description: "Funis otimizados que transformam seguidores em alunos pagantes de forma previsível.",
  },
  {
    icon: Users,
    title: "Captação de Leads",
    description: "Estratégias para atrair leads qualificados que realmente querem sua mentoria.",
  },
  {
    icon: Megaphone,
    title: "Tráfego Pago",
    description: "Campanhas que geram ROI real, com investimento inteligente e escalável.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Métricas e relatórios para decisões baseadas em dados, não em achismos.",
  },
  {
    icon: Rocket,
    title: "Lançamentos Digitais",
    description: "Planejamento e execução de lançamentos que batem recordes de faturamento.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4" id="servicos">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Tudo que seu negócio de <span className="text-gradient-red">mentoria precisa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
