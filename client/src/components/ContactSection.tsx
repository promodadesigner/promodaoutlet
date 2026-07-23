import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 border-b border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground">
            Contato
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Saiba mais sobre nossos tecidos.
            <br />
            Entre em contato com nossa equipe,
            <br />
            <span className="text-foreground font-medium">
              estamos prontos para atender você
            </span>
            !
          </p>
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 text-sm tracking-wide uppercase hover:bg-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            Fale Conosco
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
