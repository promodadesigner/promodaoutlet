import { Download } from "lucide-react";

const CATALOG_URL =
  "https://teksana.com.br/wp-content/uploads/2025/03/TEKSANA_CATALOGO_PERCAL_2025_COMPLETO.pdf";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-foreground tracking-tight">
            Percal
          </h1>

          <div className="w-24 h-px bg-border" />

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 text-sm tracking-wide uppercase hover:bg-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            <Download size={16} />
            Baixar Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
