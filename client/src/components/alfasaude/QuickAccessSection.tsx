/* Design: cuidado institucional contemporâneo — acessos rápidos devem ser diretos e facilmente identificáveis. */
import { motion } from "framer-motion";
import { Calendar, FlaskConical, Scissors, FileSearch } from "lucide-react";

const whatsappLink = (message: string) =>
  `https://wa.me/558622225555?text=${encodeURIComponent(message)}`;

const CARDS = [
  {
    icon: Calendar,
    title: "Agendar consulta",
    description: "Encontre uma especialidade e agende seu atendimento.",
    color: "#258D83",
    bg: "#E7F6F3",
    href: whatsappLink("Olá! Gostaria de agendar uma consulta na Alfa Saúde."),
  },
  {
    icon: FlaskConical,
    title: "Realizar exame",
    description: "Confira nossos exames e serviços diagnósticos.",
    color: "#207972",
    bg: "#E7F6F3",
    href: whatsappLink("Olá! Gostaria de realizar um exame na Alfa Saúde."),
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    description: "Conheça nossa estrutura e especialidades cirúrgicas.",
    color: "#164F53",
    bg: "#E7F6F3",
    href: whatsappLink("Olá! Gostaria de saber mais sobre cirurgias e agendar um atendimento."),
  },
  {
    icon: FileSearch,
    title: "Resultados de exames",
    description: "Acesse seus resultados de forma rápida e segura.",
    color: "#258D83",
    bg: "#E7F6F3",
    href: whatsappLink("Olá! Gostaria de consultar meus resultados de exames."),
  },
];

export function QuickAccessSection() {
  return (
      <section className="relative z-10 bg-[#F7FBFA] px-4 py-6 sm:px-6 sm:py-8 lg:-mt-16 lg:bg-transparent lg:px-8 lg:pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            className="group relative min-h-[172px] rounded-2xl border border-white/60 bg-white p-5 shadow-xl shadow-black/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/12 sm:p-6"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: card.bg }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3
                className="mb-1.5"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0F1F2A",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6B7C8D",
                  lineHeight: 1.55,
                }}
              >
                {card.description}
              </p>
              <div
                className="absolute bottom-5 right-5 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{ background: card.color }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
