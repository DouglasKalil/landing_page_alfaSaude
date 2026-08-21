/* Design: cuidado institucional contemporâneo — localização e contato devem inspirar orientação e confiança. */
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "R. Coelho de Resende, 551 — Centro (Sul)",
    sub: "Teresina — PI, 64001-370",
    color: "#258D83",
    bg: "#E8F6F3",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (86) 8827-0703",
    sub: "Central de Agendamento",
    color: "#207972",
    bg: "#E8F6F3",
    href: "https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Central%20de%20Agendamento%20da%20Alfa%20Sa%C3%BAde.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (86) 8827-0703",
    sub: "Atendimento rápido",
    color: "#258D83",
    bg: "#E8F6F3",
    href: "https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Alfa%20Sa%C3%BAde.",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@alfaclub.com.br",
    sub: "Resposta em até 24h",
    color: "#258D83",
    bg: "#E8F6F3",
    href: "mailto:contato@alfaclub.com.br",
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "Segunda a sexta: 6h30 às 17h",
    sub: "Atendimento presencial",
    color: "#207972",
    bg: "#E8F6F3",
  },
];

export function LocationSection() {
  return (
    <section
      id="contato"
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#E8F6F3",
              color: "#258D83",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Localização & Contato
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#183F46",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Estamos prontos
            <br />
            para receber você.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {CONTACT_ITEMS.map((item, i) => {
                const El = item.href ? "a" : "div";
                return (
                  <El
                    key={item.label}
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-2xl border p-4 transition-all hover:-translate-y-px hover:shadow-md sm:gap-4 sm:p-5"
                    style={{
                      border: "1.5px solid #DCEBE8",
                      background: "#FBFDFC",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.bg }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#8FA5B1", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {item.label}
                      </div>
                      <div className="break-words" style={{ fontSize: "15px", fontWeight: 700, color: "#183F46" }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: "12px", color: "#8FA5B1" }}>{item.sub}</div>
                    </div>
                  </El>
                );
              })}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=R.%20Coelho%20de%20Resende%2C%20551%2C%20Centro%20(Sul)%2C%20Teresina%20-%20PI%2C%2064001-370"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white transition-all hover:shadow-lg hover:shadow-[#258D83]/30"
              style={{
                background: "linear-gradient(135deg, #258D83 0%, #1E756D 100%)",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              <MapPin className="w-4 h-4" />
              Como chegar
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[420px]"
            style={{ border: "1.5px solid #DCEBE8" }}
          >
            <iframe
              title="Localização AlfaSaúde"
              src="https://www.google.com/maps?q=R.%20Coelho%20de%20Resende%2C%20551%2C%20Centro%20(Sul)%2C%20Teresina%20-%20PI%2C%2064001-370&output=embed"
              width="100%"
              height="100%"
              className="h-full"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay badge */}
            <div
              className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-xl px-3 py-2 shadow-lg"
              style={{ background: "white" }}
            >
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: "#E63946" }}
              />
              <span className="leading-tight" style={{ fontSize: "13px", fontWeight: 700, color: "#0F1F2A" }}>
                AlfaSaúde — R. Coelho de Resende, 551
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
