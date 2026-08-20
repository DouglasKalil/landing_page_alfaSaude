/* Design: cuidado institucional contemporâneo — estrutura física apresentada com leveza editorial e clareza. */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20visita%20ou%20atendimento%20na%20Alfa%20Sa%C3%BAde.";

const IMAGES = [
  {
    src: "/assets/recepcao-alfa-clube.webp",
    label: "Corredor e Recepção",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/assets/consulta-com-paciente.webp",
    label: "Estrutura Hospitalar",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/consulta-medica.webp",
    label: "Centro Cirúrgico",
    span: "col-span-1 row-span-1",
  },
];

export function StructureSection() {
  return (
    <section
      id="estrutura"
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ background: "#F5FAFB" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "#E7F6F3",
                color: "#258D83",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Nossa Estrutura
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#164F53",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
                marginBottom: "20px",
              }}
            >
              Tecnologia para
              <br />
              <span style={{ color: "#258D83" }}>cuidar melhor de você.</span>
            </h2>
            <p
              style={{
                color: "#4A6274",
                fontSize: "16px",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Unimos tecnologia, segurança e uma estrutura moderna para oferecer
              uma experiência mais eficiente em todas as etapas do seu
              atendimento — da recepção ao centro cirúrgico.
            </p>

            <div className="space-y-4 mb-10">
              {[
                ["Recepção e espera confortável", "Ambiente acolhedor para pacientes e acompanhantes."],
                ["Consultórios modernos", "Equipados com tecnologia para diagnóstico preciso."],
                ["Centro cirúrgico de referência", "Estrutura completa para procedimentos de alta complexidade."],
                ["Equipamentos de última geração", "Diagnóstico por imagem, laboratório e mais."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-4 rounded-xl transition-all hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div
                      style={{ fontSize: "15px", fontWeight: 700, color: "#0F1F2A", marginBottom: "2px" }}
                    >
                      {title}
                    </div>
                    <div style={{ fontSize: "13px", color: "#6B7C8D", lineHeight: 1.5 }}>
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-white transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-[#258D83]/30"
              style={{
                background: "linear-gradient(135deg, #258D83 0%, #164F53 100%)",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Agendar visita ou atendimento
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid h-[360px] grid-cols-2 grid-rows-2 gap-3 sm:h-[460px] sm:gap-4 lg:h-[520px]"
          >
            {/* Large left image */}
            <div className="row-span-2 relative overflow-hidden rounded-3xl group">
              <img
                src="/assets/recepcao-alfa-clube.webp"
                alt="Recepção da unidade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,35,0.7), transparent)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 600 }}>
                  Recepção
                </span>
              </div>
            </div>

            {/* Top right */}
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/assets/consulta-com-paciente.webp"
                alt="Consulta em ambiente acolhedor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,35,0.7), transparent)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px", fontWeight: 600 }}>
                  Internação
                </span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/assets/consulta-medica.webp"
                alt="Atendimento médico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,35,0.7), transparent)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px", fontWeight: 600 }}>
                  Centro Cirúrgico
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
