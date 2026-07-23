import { ArrowRight, Ruler, Sparkles, Star } from "lucide-react";

const fabricCategories = [
  {
    name: "Percal",
    description: "Maciez e resistência para o dia a dia",
    features: ["100% Algodão", "150 a 200 fios", "Alta durabilidade"],
    color: "from-[#0B1D3A] to-[#1A3055]",
    accent: "bg-[#8BA4C4]",
  },
  {
    name: "Tricoline",
    description: "Leveza e conforto em cada fio",
    features: ["Tecido respirável", "Cores vibrantes", "Ideal para roupas"],
    color: "from-[#1A3055] to-[#2A4570]",
    accent: "bg-[#B8C8D8]",
  },
  {
    name: "Sarja",
    description: "Textura elegante para decoração",
    features: ["Textura marcante", "Versatilidade", "Acabamento premium"],
    color: "from-[#2A4570] to-[#3A5580]",
    accent: "bg-[#E2E8F0]",
  },
];

const fabricPatterns = [
  { codigo: "PER-001", name: "Percal Floral", color: "bg-pink-100" },
  { codigo: "PER-002", name: "Percal Liso", color: "bg-blue-100" },
  { codigo: "PER-003", name: "Percal Listrado", color: "bg-green-100" },
  { codigo: "TRI-001", name: "Tricoline Floral", color: "bg-yellow-100" },
  { codigo: "TRI-002", name: "Tricoline Liso", color: "bg-purple-100" },
  { codigo: "TRI-003", name: "Tricoline Xadrez", color: "bg-red-100" },
  { codigo: "SAR-001", name: "Sarja Listrada", color: "bg-indigo-100" },
  { codigo: "SAR-002", name: "Sarja Lisa", color: "bg-teal-100" },
];

export default function FabricShowcase() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#8BA4C4] mb-4">
            Nossos Tecidos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-[#0B1D3A] mb-6">
            Qualidade em cada fio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trabalhamos com os melhores tecidos do mercado, oferecendo variedade 
            e qualidade para atender suas necessidades.
          </p>
        </div>

        {/* Fabric Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {fabricCategories.map((fabric, index) => (
            <div
              key={fabric.name}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br text-white p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${index === 0 ? '#0B1D3A' : index === 1 ? '#1A3055' : '#2A4570'}, ${index === 0 ? '#1A3055' : index === 1 ? '#2A4570' : '#3A5580'})`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className={`w-12 h-1 ${fabric.accent} rounded-full mb-6`}></div>
                <h3 className="text-2xl lg:text-3xl font-display font-light mb-3">
                  {fabric.name}
                </h3>
                <p className="text-white/70 mb-6">{fabric.description}</p>
                <ul className="space-y-3 mb-8">
                  {fabric.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                      <Sparkles size={14} className="text-white/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contato"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white/60 transition-colors duration-300"
                >
                  Saiba mais
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fabric Patterns Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-light text-[#0B1D3A] mb-8 text-center">
            Nossas Estampas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {fabricPatterns.map((pattern) => (
              <div key={pattern.codigo} className="group flex flex-col items-center">
                <div className={`relative w-full aspect-square overflow-hidden rounded-lg ${pattern.color} flex items-center justify-center`}>
                  <div className="absolute top-0 left-0 bg-[#0B1D3A] text-white text-xs px-2 py-1 z-10 rounded-br">
                    COD: {pattern.codigo}
                  </div>
                  <div className="text-4xl opacity-20">🧵</div>
                </div>
                <span className="mt-3 text-sm font-medium text-[#0B1D3A]">
                  {pattern.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
          <div className="text-center">
            <div className="w-14 h-14 bg-[#F1F5F9] rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler size={24} className="text-[#0B1D3A]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0B1D3A] mb-2">Venda a Metro</h4>
            <p className="text-sm text-slate-600">
              Compre exatamente a quantidade que precisa, sem desperdício.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#F1F5F9] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-[#0B1D3A]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0B1D3A] mb-2">Qualidade Premium</h4>
            <p className="text-sm text-slate-600">
              Tecidos selecionados com os mais altos padrões de qualidade.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#F1F5F9] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-[#0B1D3A]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0B1D3A] mb-2">Variedade</h4>
            <p className="text-sm text-slate-600">
              Diversas cores, texturas e composições para todos os projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
