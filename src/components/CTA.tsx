import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container max-w-3xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Pronto para <span className="text-gradient-red">escalar sua mentoria?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Agende uma sessão estratégica gratuita e descubra como podemos multiplicar seus resultados.
        </p>
        <Button variant="hero" size="xl">
          Agendar sessão gratuita
          <ArrowRight className="ml-1" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">Sem compromisso. 100% gratuito.</p>
      </div>
    </section>
  );
};

export default CTA;
