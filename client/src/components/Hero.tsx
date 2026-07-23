import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1D3A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#1A3055] to-[#0B1D3A]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#8BA4C4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#B8C8D8] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

      <div className="container relative z-10 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={14} className="text-[#8BA4C4]" />
            <span className="text-sm text-white/90 font-medium">Qualidade que você pode sentir</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-white tracking-tight mb-6 leading-tight">
            Tecidos que contam
            <br />
            <span className="text-[#8BA4C4]">sua história</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Na Promoda Outlet, cada fio é selecionado com excelência. 
            Oferecemos tecidos de alta qualidade a metro, para quem busca 
            qualidade e sofisticação em cada peça.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#produtos"
              className="group inline-flex items-center gap-2 bg-white text-[#0B1D3A] px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded hover:bg-[#F1F5F9] transition-all duration-300 active:scale-[0.98]"
            >
              Ver Tecidos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-all duration-300 rounded"
            >
              Fale Conosco
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8BA4C4] rounded-full"></div>
              <span>100% Algodão</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8BA4C4] rounded-full"></div>
              <span>Qualidade Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8BA4C4] rounded-full"></div>
              <span>Venda a Metro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
