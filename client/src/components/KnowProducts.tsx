const otherFabrics = [
  {
    name: "Tricoline",
    image:
      "https://teksana.com.br/wp-content/uploads/2025/02/Tricoline-1.png",
    href: "https://teksana.com.br/tecidos/tricoline/",
  },
  {
    name: "Sarja",
    image:
      "https://teksana.com.br/wp-content/uploads/2025/02/Sarja-1.png",
    href: "https://teksana.com.br/tecidos/sarja/",
  },
];

const badges = [
  {
    name: "ABIT",
    image: "https://teksana.com.br/wp-content/uploads/2025/02/abit.png",
  },
  {
    name: "Sou de Algodão",
    image: "https://teksana.com.br/wp-content/uploads/2025/02/sou-algodao.png",
  },
];

export default function KnowProducts() {
  return (
    <section className="py-16 md:py-20 border-b border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-10 text-center">
          Conheça os nossos produtos
        </h2>

        {/* Fabric Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          {otherFabrics.map((fabric) => (
            <a
              key={fabric.name}
              href={fabric.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center"
            >
              <div className="text-center">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Badges */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <img
              key={badge.name}
              src={badge.image}
              alt={badge.name}
              className="h-16 md:h-20 w-auto object-contain opacity-80"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
