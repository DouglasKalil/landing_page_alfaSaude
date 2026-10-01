/* Design: cuidado institucional contemporâneo — hero fotográfico, mensagem de aniversário e contraste sofisticado da marca. */
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const TRUST_BADGES = ["Atendimento especializado", "Tecnologia e segurança", "Rede credenciada"];
const WHATSAPP_URL = "https://wa.me/558622225555?text=Ol%C3%A1%21%20Gostaria%20de%20realizar%20um%20atendimento%20na%20Alfa%20Sa%C3%BAde.";
const INSTAGRAM_URL = "https://www.instagram.com/alfa_saude?igsi=MWF5YjlzbTB0dnozMw==";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F9FCFB] pt-20 sm:pt-[90px] lg:min-h-[720px] lg:pt-[96px]">
      <img src="/assets/atendimento-odontologico.webp" alt="Profissional de saúde em atendimento odontológico infantil" className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[54%_center] lg:object-[48%_center] filter-none" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.93)_42%,rgba(255,255,255,0.70)_69%,rgba(244,251,249,0.22)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_42%,rgba(255,255,255,0.64)_62%,rgba(244,251,249,0.13)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #258D83 1px, transparent 0)", backgroundSize: "42px 42px" }} />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-10 sm:px-6 sm:py-12 lg:min-h-[624px] lg:px-8">
        <div className="max-w-3xl lg:max-w-[44rem]">
          <motion.p {...fadeUp(0.12)} className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: "#258D83" }}>
            Exames, consultas e cirurgias
          </motion.p>
          <motion.h1 {...fadeUp(0.2)} className="m-0 mb-7" style={{ fontSize: "clamp(2.7rem, 5.8vw, 4.8rem)", fontWeight: 800, color: "#183F46", lineHeight: 1.03, letterSpacing: "-0.055em" }}>
            Há <span style={{ color: "#C92045" }}>11 anos</span>
            <br />
            cuidando de você.
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mb-8 max-w-2xl sm:mb-10" style={{ color: "#48656B", fontSize: "clamp(1rem, 2vw, 1.18rem)", lineHeight: 1.75 }}>
            No AlfaSaúde, você encontra consultas, exames e cirurgias em um só lugar — com tecnologia, segurança e uma equipe preparada para cuidar de você com excelência e humanização.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="mb-9 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 rounded-xl px-5 py-4 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 sm:justify-start sm:px-7" style={{ background: "linear-gradient(135deg, #258D83 0%, #1E756D 100%)", fontSize: "16px", fontWeight: 750, boxShadow: "0 10px 26px rgba(37,141,131,0.22)" }}>
              <Calendar className="h-5 w-5" />
              Agendar atendimento
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 rounded-xl border-2 bg-white/95 px-5 py-4 transition-all duration-200 hover:bg-[#F2FAF8] active:scale-95 sm:justify-start sm:px-7" style={{ borderColor: "#258D83", color: "#207972", fontSize: "16px", fontWeight: 700 }}>
              Conheça a nossa rede
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.5)} className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: "#258D83" }} />
                <span style={{ color: "#35545A", fontSize: "14px", fontWeight: 700 }}>{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
