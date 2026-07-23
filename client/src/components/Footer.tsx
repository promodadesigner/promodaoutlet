import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerNav = [
  { label: "Nossos Tecidos", href: "/#produtos" },
  { label: "Quem Somos", href: "/#sobre" },
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
    label: "Linkedin",
    href: "https://www.linkedin.com/company/promodaoutlet/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo & Contact Info */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo_promoda_outlet_branco_trans.png"
                alt="Promoda Outlet"
                className="h-10 w-auto"
              />
            </a>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>(19) 3475-9888 | (19) 3406-3000</p>
              <p>pedido@promodaoutlet.com.br</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground/80">MATRIZ</p>
              <p>Rua Dom Pedro II, 1044/1054 - Conserva</p>
              <p>Americana/SP | CEP: 13466-000</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
              Navegação
            </h3>
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
              Siga nossas redes sociais
            </h3>
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
                    className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Promoda Outlet. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
