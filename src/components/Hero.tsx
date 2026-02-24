import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-5xl text-center relative z-10">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-8 tracking-wider uppercase">
            Marketing para Mentores
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transforme sua mentoria em uma{" "}
          <span className="text-gradient-red">máquina de vendas</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Estratégias de marketing comprovadas para mentores que querem escalar seus resultados, 
          atrair mais alunos e construir autoridade no digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl">
            Quero escalar minha mentoria
            <ArrowRight className="ml-1" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Ver resultados
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { number: "500+", label: "Mentores" },
            { number: "R$50M+", label: "Faturados" },
            { number: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-display text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
