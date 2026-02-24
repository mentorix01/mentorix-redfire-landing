import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Mentor de Negócios",
    text: "A Mentorix transformou meu negócio. Saí de R$30k/mês para R$180k/mês em apenas 6 meses com as estratégias certas.",
    stars: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Mentora de Carreira",
    text: "Nunca imaginei que marketing poderia ser tão específico para mentores. Os resultados falam por si. Recomendo de olhos fechados.",
    stars: 5,
  },
  {
    name: "Ricardo Alves",
    role: "Mentor de Finanças",
    text: "Profissionalismo e resultados reais. Minha lista de espera para mentoria agora tem mais de 200 pessoas.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-card/50" id="depoimentos">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Quem já <span className="text-gradient-red">confia em nós</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-card border border-border opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold font-display">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
