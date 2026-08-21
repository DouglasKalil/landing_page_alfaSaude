/* Design: cuidado institucional contemporâneo — vitrine de parceiros com superfícies claras, cores da marca e leitura objetiva. */
import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";

const PARTNERS = [
  { name: "Augustos Medicina Diagnóstica", image: "/assets/augustos.png" },
  { name: "CardioClínica Teresina", image: "/assets/cardioclinica.png" },
  { name: "Sabry Centro Médico", image: "/assets/sabry.png" },
  { name: "Clínica Ultracare", image: "/assets/ultracare.png" },
  { name: "DermaDoctor", image: "/assets/dermadoctor.png" },
  { name: "Clínica Bem Viver", image: "/assets/bem-viver.png" },
  { name: "NeoClínica", image: "/assets/neoclinica.png" },
  { name: "Oftalmo Club", image: "/assets/oftalmo-club.png" },
  { name: "Centro Imagem Medicina Diagnóstica", image: "/assets/centro-imagem.png" },
];

export function HospitalsSection() {
  return (
    <section id="credenciados" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end sm:gap-6"
        >
          <div className="max-w-2xl">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: "#E8F6F3", color: "#258D83", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}
            >
              <Building2 className="h-3.5 w-3.5" />
              REDE CREDENCIADA
            </span>
            <h2 style={{ color: "#183F46", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
              Hospitais e clínicas
              <br />
              que caminham com você.
            </h2>
          </div>
          <p className="max-w-sm sm:text-right" style={{ color: "#5A7478", fontSize: "15px", lineHeight: 1.7 }}>
            Conte com uma rede parceira preparada para acompanhar as diferentes etapas do seu cuidado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <motion.a
              key={partner.name}
              href="#contato"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
              style={{ borderColor: "#DDEAE8", background: "linear-gradient(145deg, #FFFFFF 0%, #F6FBFA 100%)", boxShadow: "0 8px 18px rgba(24,63,70,0.035)" }}
              aria-label={`Conhecer ${partner.name}`}
            >
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ background: "#258D83", color: "#FFFFFF" }}>
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="flex flex-1 items-center justify-center rounded-2xl border bg-white p-6" style={{ borderColor: "#E7F0EE" }}>
                <img src={partner.image} alt={`Logo ${partner.name}`} className="h-28 max-w-[84%] object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32" />
              </div>
              <div className="pt-5">
                <span style={{ color: "#258D83", fontSize: "11px", fontWeight: 800, letterSpacing: "0.09em" }}>REDE MÉDICA CREDENCIADA</span>
                <h3 className="mt-1.5" style={{ color: "#183F46", fontSize: "16px", fontWeight: 750, lineHeight: 1.35 }}>{partner.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
