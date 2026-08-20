/* Design: cuidado institucional contemporâneo — informação profissional legível e sem conteúdo de avaliação não verificado. */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DOCTORS = [
  {
    name: "Dr. Carlos Mendes",
    specialty: "Cardiologia",
    crm: "CRM-SP 45.231",
    description: "Especialista em doenças cardiovasculares com 15 anos de experiência em diagnóstico e tratamento clínico.",
    photo: "/assets/dra-retrato-em-pe.webp",
    color: "#E63946",
    bg: "#FDECEE",
  },
  {
    name: "Dra. Ana Paula Costa",
    specialty: "Neurologia",
    crm: "CRM-SP 38.762",
    description: "Neurologista com foco em diagnóstico de doenças neurológicas e acompanhamento de longo prazo.",
    photo: "/assets/dra-retrato-clinico.webp",
    color: "#7950F2",
    bg: "#F3F0FF",
  },
  {
    name: "Dra. Fernanda Lima",
    specialty: "Ginecologia",
    crm: "CRM-SP 51.089",
    description: "Referência em saúde da mulher, com atendimento humanizado e foco no acompanhamento preventivo.",
    photo: "/assets/consulta-com-paciente.webp",
    color: "#E64980",
    bg: "#FFECF2",
  },
  {
    name: "Dr. Roberto Alves",
    specialty: "Ortopedia",
    crm: "CRM-SP 29.445",
    description: "Ortopedista especializado em lesões esportivas, artroscopia e cirurgias do aparelho locomotor.",
    photo: "/assets/atendimento-odontologico.webp",
    color: "#05B8D0",
    bg: "#E6F8FB",
  },
];

export function DoctorsSection() {
  return (
    <section
      id="medicos"
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
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14"
        >
          <div>
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
              Nossos Médicos
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
              Conheça nossa
              <br />
              equipe médica.
            </h2>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 transition-all hover:bg-[#05B8D0] hover:text-white hover:border-[#05B8D0] group"
            style={{ borderColor: "#05B8D0", color: "#05B8D0", fontSize: "14px", fontWeight: 600 }}
          >
            Conhecer todos os profissionais
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl"
              style={{ border: "1.5px solid #E2EBF0" }}
            >
              {/* Photo */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,31,42,0.6) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg"
                  style={{ background: doc.color, backdropFilter: "blur(4px)" }}
                >
                  <span style={{ color: "white", fontSize: "11px", fontWeight: 700 }}>
                    {doc.specialty}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0F1F2A",
                    marginBottom: "2px",
                    lineHeight: 1.3,
                  }}
                >
                  {doc.name}
                </h3>
                <div
                  style={{ fontSize: "12px", color: "#8FA5B1", fontWeight: 600, marginBottom: "8px" }}
                >
                  {doc.crm}
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#6B7C8D",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {doc.description}
                </p>

                <a
                  href="#agendamento"
                  className="block text-center py-2.5 rounded-xl transition-all duration-250 hover:shadow-md"
                  style={{
                    background: doc.bg,
                    color: doc.color,
                    fontSize: "13px",
                    fontWeight: 700,
                    border: `1.5px solid ${doc.color}30`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = doc.color;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = doc.bg;
                    (e.currentTarget as HTMLElement).style.color = doc.color;
                  }}
                >
                  Agendar consulta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
