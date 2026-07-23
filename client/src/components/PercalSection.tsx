import { ArrowRight } from "lucide-react";
import ProductGrid, { type PercalProduct } from "./ProductGrid";

interface PercalSectionProps {
  fios: number;
  subtitle: string;
  description: string;
  longDescription: string;
  artigo: string;
  composicao: string;
  largura: string;
  products: PercalProduct[] | undefined;
  isLoading: boolean;
}

export default function PercalSection({
  fios,
  subtitle,
  description,
  longDescription,
  artigo,
  composicao,
  largura,
  products,
  isLoading,
}: PercalSectionProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border">
      <div className="container">
        {/* Section Title */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground mb-6">
            {fios} fios
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-4">
            {description}
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-3xl leading-relaxed">
            {longDescription}
          </p>
        </div>

        {/* Characteristics */}
        <div className="mb-10">
          <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Características
          </h3>
          <div className="flex flex-col gap-1 text-sm text-foreground/90">
            <p>
              <span className="text-muted-foreground">Artigo:</span>{" "}
              <span className="font-medium">{artigo}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Composição:</span>{" "}
              <span className="font-medium">{composicao}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Largura:</span>{" "}
              <span className="font-medium">{largura}</span>
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} isLoading={isLoading} />

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center text-center gap-4">
          <p className="text-sm text-muted-foreground">
            Solicite o contato de um
            <br />
            de nossos representantes:
          </p>
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 text-sm tracking-wide uppercase hover:bg-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            Quero Solicitar
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
