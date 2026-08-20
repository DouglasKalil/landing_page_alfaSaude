/* Design: cuidado institucional contemporâneo — interação clara, acolhedora e serena. */
import { motion } from "framer-motion";
import { Users, Cpu, ShieldCheck, Link2, Heart } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Users,
    title: "Equipe especializada",
    description:
      "Profissionais qualificados e preparados para oferecer atendimento humanizado, com foco no seu bem-estar.",
    color: "#05B8D0",
    bg: "#E6F8FB",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    description:
      "Equipamentos modernos para diagnóstico preciso e tratamento eficiente em todas as especialidades.",
    color: "#037FA3",
    bg: "#E0F4FA",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Protocolos rigorosos garantem sua segurança em todas as etapas do atendimento, do exame à cirurgia.",
    color: "#0A6080",
    bg: "#D8EFF6",
  },
  {
    icon: Link2,
    title: "Atendimento integrado",
    description:
      "Consultas, exames e cirurgias conectados em uma única estrutura. Facilidade e agilidade para você.",
    color: "#1098AD",
    bg: "#E3FAFC",
  },
  {
    icon: Heart,
    title: "Humanização",
    description:
      "Cada paciente é tratado de forma individual, com atenção, acolhimento e respeito em cada momento.",
    color: "#E63946",
    bg: "#FDECEE",
  },
];

export function DifferentialsSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#E6F8FB",
              color: "#05B8D0",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Por que escolher o AlfaSaúde
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#0F1F2A",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Nossos diferenciais
            <br />
            fazem a diferença.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                border: "1.5px solid #E2EBF0",
                background: "#FAFCFE",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = item.color;
                (e.currentTarget as HTMLElement).style.background = item.bg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E2EBF0";
                (e.currentTarget as HTMLElement).style.background = "#FAFCFE";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.bg }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0F1F2A",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6B7C8D",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="#agendamento"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group flex flex-col items-center justify-center p-8 rounded-3xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#05B8D0]/30"
            style={{
              background: "linear-gradient(135deg, #05B8D0 0%, #037FA3 100%)",
              minHeight: "200px",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="3" y="3" width="18" height="18" rx="6" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span
              style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", textAlign: "center" }}
            >
              Agende seu atendimento
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Sua saúde não pode esperar. Marque agora.
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
