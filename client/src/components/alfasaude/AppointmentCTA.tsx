/* Design: cuidado institucional contemporâneo — interação clara, acolhedora e serena. */
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Phone, Clock } from "lucide-react";

const CTA_IMAGE = "/assets/consulta-medica.webp";
const WHATSAPP_URL = "https://wa.me/558622225555?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20atendimento%20na%20Alfa%20Sa%C3%BAde.";

export function AppointmentCTA() {
  return (
    <section
      id="agendamento"
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ background: "#F5FAFB" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(135deg, #183F46 0%, #0B2D35 100%)" }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10"
            style={{ background: "#63C8BE" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-8"
            style={{ background: "#63C8BE" }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex flex-col justify-center p-6 sm:p-10 lg:p-16"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full mb-6"
                style={{
                  background: "rgba(99,200,190,0.14)",
                  border: "1px solid rgba(99,200,190,0.3)",
                  color: "#A8E4DD",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  width: "fit-content",
                }}
              >
                Agende seu Atendimento
              </span>

              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                Sua saúde
                <br />
                <span style={{ color: "#63C8BE" }}>não pode esperar.</span>
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  marginBottom: "36px",
                  maxWidth: "440px",
                }}
              >
                Agende sua consulta, exame ou procedimento de forma rápida e
                segura. Nossa equipe está pronta para cuidar de você com toda
                a atenção que você merece.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl px-5 py-4 text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#258D83]/40 active:scale-95 sm:w-auto sm:px-7"
                  style={{
                    background: "linear-gradient(135deg, #258D83 0%, #1E756D 100%)",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Agendar atendimento
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl px-5 py-4 transition-all hover:bg-white/20 active:scale-95 sm:w-auto sm:px-7"
                  style={{
                    border: "2px solid #63C8BE",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>

              {/* Contact options */}
              <div className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-6">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99,200,190,0.15)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "#63C8BE" }} />
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: 600 }}>
                      Central de Agendamento
                    </div>
                    <div style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>
                      (86) 2222-5555
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99,200,190,0.16)" }}
                  >
                    <Clock className="w-4 h-4" style={{ color: "#63C8BE" }} />
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: 600 }}>
                      Atendimento
                    </div>
                    <div style={{ color: "white", fontSize: "14px", fontWeight: 700 }}>
                      Segunda a sexta, 6h30–17h
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative hidden lg:block"
              style={{ minHeight: "480px" }}
            >
              <img
                src={CTA_IMAGE}
                alt="Profissional de saúde em consulta com paciente"
                className="absolute inset-0 w-full h-full object-cover object-[center_44%]"
                style={{ borderRadius: "0 24px 24px 0" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #051B2C 0%, transparent 30%)",
                  borderRadius: "0 24px 24px 0",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
