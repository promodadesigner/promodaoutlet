import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Nossos Tecidos", href: "/#produtos" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 lg:py-5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo_promoda_outlet_branco_trans.png"
            alt="Promoda Outlet"
            className={`h-16 lg:h-20 w-auto transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-slate-600 hover:text-[#0B1D3A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+551934759888"
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
              scrolled
                ? "bg-[#0B1D3A] text-white hover:bg-[#1A3055]"
                : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
            }`}
          >
            <Phone size={14} />
            Ligue-nos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors duration-200 ${
            scrolled ? "text-[#0B1D3A]" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0B1D3A] py-3 px-2 transition-colors duration-200 border-b border-slate-100 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+551934759888"
              className="inline-flex items-center justify-center gap-2 mt-3 bg-[#0B1D3A] text-white px-4 py-3 text-sm font-medium rounded"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={14} />
              Ligue-nos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
