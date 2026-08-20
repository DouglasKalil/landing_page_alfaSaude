/* Design: cuidado institucional contemporâneo — navegação clínica, precisa e acolhedora. */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const alfaLogo = "/assets/alfa-saude-logo-oficial.webp";
const WHATSAPP_URL = "https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20atendimento%20na%20Alfa%20Sa%C3%BAde.";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Consultas", href: "#servicos" },
  { label: "Exames", href: "#servicos" },
  { label: "Cirurgias", href: "#servicos" },
  { label: "O Hospital", href: "#estrutura" },
  { label: "Credenciados", href: "#credenciados" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between sm:h-[90px] lg:h-[96px]">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center flex-shrink-0"
            aria-label="AlfaSaúde — voltar ao início"
          >
            <img
              className="h-[58px] w-[180px] object-contain object-left sm:h-[68px] sm:w-[206px] lg:h-[76px] lg:w-[226px]"
              src={alfaLogo}
              alt="AlfaSaúde — Exames, Consultas e Cirurgias"
              style={{
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 rounded-lg group transition-all duration-200"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                <span
                  className="relative z-10 transition-colors duration-200 group-hover:text-[#258D83]"
                  style={{
                    color: "#28464D",
                  }}
                >
                  {item.label}
                </span>
                <span className="absolute inset-0 rounded-lg bg-[#258D83]/0 group-hover:bg-[#258D83]/8 transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-200 hover:text-[#258D83]"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#28464D",
              }}
            >
              <Phone className="w-4 h-4" />
              <span>+55 (86) 8827-0703</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#258D83]/30 hover:-translate-y-px active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #258D83 0%, #1E756D 100%)",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Agendar atendimento
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#28464D" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? "Fechar menu" : "Abrir menu"
            }
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4">
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl transition-all hover:bg-[#EAF7F5] hover:text-[#258D83]"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#3D5A69",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2"
                  style={{
                    color: "#3D5A69",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <Phone className="w-4 h-4 text-[#258D83]" />
                  <span>+55 (86) 8827-0703</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3.5 rounded-xl text-white transition-all active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #258D83 0%, #1E756D 100%)",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Agendar atendimento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
