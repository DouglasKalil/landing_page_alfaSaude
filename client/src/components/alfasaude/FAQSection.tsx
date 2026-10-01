/* Design: cuidado institucional contemporâneo — respostas objetivas com expansão suave. */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar sua consulta pelo WhatsApp (86) 2222-5555. Basta escolher a especialidade, o profissional e o horário disponível.",
  },
  {
    question: "Quais especialidades estão disponíveis?",
    answer:
      "As especialidades disponíveis são: Pneumologista, Cardiologista, Ortopedista, Neurologista, Gastroenterologista, Urologista, Pediatra, Cirurgia, Ginecologista, Dermatologista, Psicologia, Psiquiatra, Otorrinolaringologista e Oftalmologista.",
  },
  {
    question: "Quais exames são realizados no AlfaSaúde?",
    answer:
      "Oferecemos uma ampla gama de exames laboratoriais e de imagem: hemograma, bioquímica, ultrassonografia, eletrocardiograma, raio-X, tomografia, ecocardiograma, endoscopia, entre outros. Consulte nossa lista completa pelo telefone.",
  },
  {
    question: "Como funciona o atendimento para cirurgias?",
    answer:
      "Após a indicação cirúrgica pelo médico especialista, nossa equipe entra em contato para orientar sobre os procedimentos pré-operatórios, agendamento, documentação necessária e convênios aceitos. Nosso centro cirúrgico é equipado para procedimentos de baixa, média e alta complexidade.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="overflow-hidden rounded-2xl border transition-all duration-250"
      style={{
        border: open ? "1.5px solid #258D83" : "1.5px solid #DCEBE8",
        background: open ? "#F2FAF8" : "#FFFFFF",
      }}
    >
      <button
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: open ? "#207972" : "#183F46",
            lineHeight: 1.4,
          }}
        >
          {faq.question}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-250"
          style={{ background: open ? "#258D83" : "#EDF7F5" }}
        >
          {open ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4" style={{ color: "#6B7C8D" }} />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6"
              style={{
                fontSize: "15px",
                color: "#4A6274",
                lineHeight: 1.72,
                borderTop: "1px solid #D7ECE7",
                paddingTop: "16px",
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ background: "#F6FBFA" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            Perguntas Frequentes
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#183F46",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Dúvidas frequentes
          </h2>
          <p style={{ color: "#6B7C8D", fontSize: "16px", lineHeight: 1.6 }}>
            Encontre as respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>

        {/* More questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <p style={{ color: "#6B7C8D", fontSize: "15px", marginBottom: "16px" }}>
            Não encontrou o que procurava?
          </p>
          <a
            href="https://wa.me/558622225555?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20Alfa%20Sa%C3%BAde."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#258D83]/25 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #258D83 0%, #1E756D 100%)",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
