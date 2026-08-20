/* Design: cuidado institucional contemporâneo — grade de serviços contínua, sem vazios e com CTAs de alto contraste. */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const whatsappLink = (message: string) =>
  `https://wa.me/558688270703?text=${encodeURIComponent(message)}`;

const SERVICES = [
  {
    title: "Cirurgias",
    description: "Centro cirúrgico preparado para procedimentos de diferentes complexidades, com protocolos rigorosos de segurança.",
    cta: "Conhecer cirurgias",
    image: "/assets/recepcao-alfa-clube.webp",
    href: whatsappLink("Olá! Gostaria de conhecer as cirurgias e agendar um atendimento."),
    accent: "#258D83",
    layout: "md:col-span-2",
    minHeight: "430px",
  },
  {
    title: "Exames",
    description: "Diagnóstico preciso com tecnologia e equipamentos de última geração para resultados confiáveis e rápidos.",
    cta: "Conhecer exames",
    image: "/assets/atendimento-odontologico.webp",
    href: whatsappLink("Olá! Gostaria de conhecer os exames disponíveis e agendar um atendimento."),
    accent: "#258D83",
    layout: "md:col-span-1",
    minHeight: "430px",
  },
  {
    title: "Consultas",
    description: "Atendimento médico especializado para diferentes áreas da saúde, com profissionais experientes e dedicados ao seu bem-estar.",
    cta: "Encontrar atendimento",
    image: "/assets/consulta-com-paciente.webp",
    href: whatsappLink("Olá! Gostaria de encontrar atendimento e agendar uma consulta."),
    accent: "#258D83",
    layout: "md:col-span-3",
    minHeight: "370px",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#F7FBFA] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-10 max-w-2xl sm:mb-14">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5" style={{ background: "#E7F6F3", color: "#258D83", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
            NOSSOS SERVIÇOS
          </span>
          <h2 style={{ color: "#183F46", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Tudo o que você precisa
            <br />
            para cuidar da sua saúde.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative min-h-[360px] overflow-hidden rounded-3xl sm:min-h-[400px] ${service.layout}`}
              style={{ minHeight: service.minHeight }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(24,63,70,0.78) 0%, rgba(24,63,70,0.55) 46%, rgba(24,63,70,0.08) 100%)" }} />
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: service.accent }} />
              <div className="absolute inset-0 flex max-w-2xl flex-col justify-end p-6 sm:p-10">
                <h3 className="mb-3 text-white" style={{ fontSize: "clamp(1.7rem, 3vw, 2.15rem)", fontWeight: 800, lineHeight: 1.15 }}>{service.title}</h3>
                <p className="mb-6 max-w-xl" style={{ color: "rgba(255,255,255,0.86)", fontSize: "15px", lineHeight: 1.7 }}>{service.description}</p>
                <a href={service.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-white transition-all duration-300 hover:gap-3" style={{ background: service.accent, fontSize: "14px", fontWeight: 700 }}>
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
