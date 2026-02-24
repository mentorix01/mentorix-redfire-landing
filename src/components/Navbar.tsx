import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container max-w-6xl flex items-center justify-between h-16 px-4">
        <a href="#" className="text-2xl font-bold font-display">
          Mentor<span className="text-primary">ix</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
          <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Depoimentos</a>
          <Button variant="default" size="sm">Falar com especialista</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#servicos" className="text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#depoimentos" className="text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Depoimentos</a>
          <Button variant="default" size="sm">Falar com especialista</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
