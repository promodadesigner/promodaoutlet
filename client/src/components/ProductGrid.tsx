import { Skeleton } from "@/components/ui/skeleton";

export interface PercalProduct {
  id: number;
  codigo: string;
  fios: number;
  artigo: string;
  composicao: string;
  largura: string;
  imagemUrl: string;
}

interface ProductGridProps {
  products: PercalProduct[] | undefined;
  isLoading: boolean;
}

export default function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="aspect-square w-full bg-secondary" />
            <Skeleton className="h-4 w-16 mx-auto bg-secondary" />
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Nenhum produto disponível no momento.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col items-center"
        >
          <div className="relative w-full aspect-square overflow-hidden bg-secondary">
            {/* COD Badge */}
            <div className="absolute top-0 left-0 bg-black/80 text-white text-xs px-2 py-1 z-10">
              COD: {product.codigo}
            </div>
            <img
              src={product.imagemUrl}
              alt={`Percal ${product.codigo}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <span className="mt-3 text-lg font-display text-primary">
            {product.codigo}
          </span>
        </div>
      ))}
    </div>
  );
}
