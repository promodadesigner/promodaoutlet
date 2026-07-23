import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#8BA4C4] mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-[#0B1D3A] mb-6">
              Fale com nossa equipe
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contato e descubra 
              como podemos ajudar no seu projeto.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+551934759888"
              className="group flex flex-col items-center p-8 bg-[#F8FAFC] rounded-xl hover:bg-[#F1F5F9] transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-[#0B1D3A] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="text-sm font-semibold text-[#0B1D3A] mb-2">Telefone</h4>
              <p className="text-sm text-slate-600 text-center">
                (19) 3475-9888
                <br />
                (19) 3406-3000
              </p>
            </a>

            <a
              href="mailto:pedido@promodaoutlet.com.br"
              className="group flex flex-col items-center p-8 bg-[#F8FAFC] rounded-xl hover:bg-[#F1F5F9] transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-[#0B1D3A] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="text-sm font-semibold text-[#0B1D3A] mb-2">E-mail</h4>
              <p className="text-sm text-slate-600 text-center">
                pedido@promodaoutlet.com.br
              </p>
            </a>

            <div className="flex flex-col items-center p-8 bg-[#F8FAFC] rounded-xl">
              <div className="w-14 h-14 bg-[#0B1D3A] rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="text-sm font-semibold text-[#0B1D3A] mb-2">Endereço</h4>
              <p className="text-sm text-slate-600 text-center">
                Rua Dom Pedro II, 1044/1054
                <br />
                Conserva - Americana/SP
                <br />
                CEP: 13466-000
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/551934759888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B1D3A] text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded hover:bg-[#1A3055] transition-all duration-300 active:scale-[0.98]"
            >
              Solicitar Orçamento
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
