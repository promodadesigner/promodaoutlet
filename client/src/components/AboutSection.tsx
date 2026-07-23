import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  { number: "25+", label: "Anos de Experiência" },
  { number: "1000+", label: "Clientes Atendidos" },
  { number: "500+", label: "Produtos" },
  { number: "99%", label: "Satisfação" },
];

const values = [
  {
    icon: CheckCircle,
    title: "Qualidade Garantida",
    description: "Cada tecido passa por rigoroso controle de qualidade antes de chegar até você.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Nossa equipe está pronta para ajudar você a encontrar o tecido perfeito.",
  },
  {
    icon: Award,
    title: "Excelência Reconhecida",
    description: "Mais de 25 anos de experiência no mercado têxtil brasileiro.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Logística eficiente para que você receba seus tecidos no prazo.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#8BA4C4] mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-[#0B1D3A] mb-6">
              Tradição e inovação em tecidos
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              A Promoda Outlet é referência no mercado têxtil brasileiro. 
              há mais de 25 anos, oferecemos tecidos de alta qualidade para 
              confecções, atacarejos e varejistas de todo o país.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nossa missão é fornecer tecidos excepcionais, combinando 
              tradição artesanal com tecnologia de ponta, para atender 
              às necessidades dos nossos clientes com excelência.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#0B1D3A] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#0B1D3A]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#0B1D3A] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
