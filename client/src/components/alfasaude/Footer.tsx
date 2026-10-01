/* Design: cuidado institucional contemporâneo — encerramento institucional, claro e acessível. */
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const alfaLogo = "/assets/alfa-saude-logo-oficial.webp";
const WHATSAPP_URL = "https://wa.me/558622225555?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Alfa%20Sa%C3%BAde.";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=R.%20Coelho%20de%20Resende%2C%20551%2C%20Centro%20(Sul)%2C%20Teresina%20-%20PI%2C%2064001-370";

const COLUMNS = [
  {
    title: "AlfaSaúde",
    links: [
      { label: "Sobre o hospital", href: "#" },
      { label: "Nossa estrutura", href: "#estrutura" },
      { label: "Trabalhe conosco", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Consultas", href: "#servicos" },
      { label: "Exames", href: "#servicos" },
      { label: "Cirurgias", href: "#servicos" },
      { label: "Rede credenciada", href: "#credenciados" },
      { label: "Localização & contato", href: "#contato" },
    ],
  },
  {
    title: "Paciente",
    links: [
      { label: "Agendamento", href: WHATSAPP_URL },
      { label: "Resultados de exames", href: "https://wa.me/558622225555?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20meus%20resultados%20de%20exames." },
      { label: "Convênios aceitos", href: "#" },
      { label: "Orientações pré-consulta", href: "#" },
    ],
  },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/alfa_saude?igsi=MWF5YjlzbTB0dnozMw==" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/Alfa-Sa%C3%BAde-100063985295613/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJmZGlkFlDM_BBjCnBzppN4DhQeGw-EPuZgtnBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeNRmbkwBBE5e2Vgddu3tRCbzaL8y5YVoush_en8HFG6OqzeGTW7oSCpMiurQ_aem_EH6tF-ZRyDDSMedBQ0KGqA&wtsid=rdr_02nEq8pFwM2KDrgIo" },
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
];

export function Footer() {
  return (
    <footer style={{ background: "#183F46" }}>
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#inicio" className="inline-block mb-5">
              <img
                src={alfaLogo}
                alt="AlfaSaúde"
                style={{
                  height: "60px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  mixBlendMode: "screen",
                  filter: "brightness(1.1) saturate(1.2)",
                }}
              />
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "300px",
              }}
            >
              Cuidando da sua saúde com tecnologia, segurança e humanização.
              Porque cada paciente merece o melhor atendimento.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { id: "telefone", icon: Phone, text: "(86) 2222-5555", href: WHATSAPP_URL },
                { id: "whatsapp", icon: MessageCircle, text: "(86) 2222-5555", href: WHATSAPP_URL },
                { id: "email", icon: Mail, text: "contato@alfaclub.com.br", href: "mailto:contato@alfaclub.com.br" },
                { id: "endereco", icon: MapPin, text: "R. Coelho de Resende, 551 — Teresina, PI", href: MAP_URL },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-3 transition-colors group"
                  style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#63C8BE";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#63C8BE" }} />
                  <span style={{ fontSize: "13px" }}>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#258D83";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#63C8BE";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
              © 2026 AlfaSaúde. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end sm:gap-6">
              {["Política de Privacidade", "Termos de Uso", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#63C8BE";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
