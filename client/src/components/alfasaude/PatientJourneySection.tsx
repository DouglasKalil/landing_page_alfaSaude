/* Design: cuidado institucional contemporâneo — jornada de atendimento clara, sequencial e humana. */
import { motion } from "framer-motion";
import { Calendar, Stethoscope, FlaskConical, Pill, ClipboardCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20iniciar%20minha%20jornada%20na%20Alfa%20Sa%C3%BAde%20e%20agendar%20um%20atendimento.";

const STEPS = [
  {
    number: "01",
    icon: Calendar,
    title: "Agende",
    description: "Escolha o serviço, especialidade ou profissional de forma rápida e prática.",
    color: "#238D83",
    bg: "#E7F6F3",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Consulte",
    description: "Realize sua consulta com nossa equipe médica especializada e experiente.",
    color: "#258D83",
    bg: "#E7F6F3",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Diagnostique",
    description: "Faça os exames necessários com tecnologia de ponta e resultados ágeis.",
    color: "#164F53",
    bg: "#E7F6F3",
  },
  {
    number: "04",
    icon: Pill,
    title: "Trate",
    description: "Tenha acesso ao tratamento ou procedimento indicado pelo especialista.",
    color: "#258D83",
    bg: "#E7F6F3",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Acompanhe",
    description: "Continue seu cuidado com acompanhamento médico contínuo e humanizado.",
    color: "#238D83",
    bg: "#E7F6F3",
  },
];

export function PatientJourneySection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ background: "#F5FAFB" }}
    >
      <div className="max-w-5xl mx-auto">
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
              background: "#E7F6F3",
              color: "#258D83",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Jornada do Paciente
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#164F53",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Como funciona
            <br />
            seu atendimento conosco?
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(to bottom, #238D83, #63C8BE, #164F53, #238D83)" }}
          />

          <div className="space-y-4 sm:space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group flex gap-4 sm:gap-6"
              >
                {/* Icon circle (desktop timeline node) */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                    style={{ background: step.bg, border: `2px solid ${step.color}30` }}
                  >
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: step.color }} />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: step.color,
                        fontSize: "10px",
                        fontWeight: 800,
                        color: "white",
                      }}
                    >
                      {step.number.replace("0", "")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="min-w-0 flex-1 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-px sm:p-6"
                  style={{ background: "#FFFFFF", border: "1.5px solid #E2EBF0" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: step.color,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        Passo {step.number}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(1.125rem, 5vw, 1.25rem)",
                          fontWeight: 800,
                          color: "#0F1F2A",
                          marginBottom: "6px",
                          lineHeight: 1.25,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6B7C8D",
                          lineHeight: 1.65,
                          maxWidth: "480px",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="hidden h-8 w-8 flex-shrink-0 self-center rounded-full md:flex md:items-center md:justify-center"
                        style={{ background: "#F5FAFB" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 2v10M2 7l5 5 5-5" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-white transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-[#258D83]/30 sm:w-auto sm:px-8"
            style={{
              background: "linear-gradient(135deg, #258D83 0%, #164F53 100%)",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            <Calendar className="w-5 h-5" />
            Iniciar minha jornada — Agendar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
