import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const footerNav = [
  { label: "Nossos Tecidos", href: "/#produtos" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61569618930514",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/promodaoutlet/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/promodaoutlet/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Contact Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo_promoda_outlet_branco_trans.png"
                alt="Promoda Outlet"
                className="h-16 lg:h-18 w-auto"
              />
            </a>
            <p className="text-sm text-white/70 mb-6 max-w-md leading-relaxed">
              Há mais de 25 anos, fornecemos tecidos de alta qualidade para 
              confecções, atacarejos e varejistas de todo o Brasil.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+551934759888"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} />
                  (19) 3475-9888
                </a>
              </li>
              <li>
                <a
                  href="mailto:pedido@promodaoutlet.com.br"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} />
                  pedido@promodaoutlet.com.br
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={14} className="mt-0.5" />
                  <span>
                    Rua Dom Pedro II, 1044/1054
                    <br />
                    Americana/SP - CEP: 13466-000
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Promoda Outlet. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
