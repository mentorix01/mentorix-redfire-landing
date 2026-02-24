const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-xl font-bold font-display">
          Mentor<span className="text-primary">ix</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mentorix. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
