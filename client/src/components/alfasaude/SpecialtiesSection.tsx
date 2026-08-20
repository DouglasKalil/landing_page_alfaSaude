/* Design: cuidado institucional contemporâneo — especialidades com navegação leve e foco na orientação. */
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, Bone, Baby, Activity, Brain, Zap, Scissors, Eye, Droplets, BarChart2, ArrowRight } from "lucide-react";

const ALL_SPECIALTIES = [
  { name: "Cardiologia", icon: Heart, color: "#E63946", bg: "#FDECEE" },
  { name: "Ortopedia", icon: Bone, color: "#05B8D0", bg: "#E6F8FB" },
  { name: "Pediatria", icon: Baby, color: "#37B24D", bg: "#EBFBEE" },
  { name: "Ginecologia", icon: Activity, color: "#E64980", bg: "#FFECF2" },
  { name: "Neurologia", icon: Brain, color: "#7950F2", bg: "#F3F0FF" },
  { name: "Dermatologia", icon: Zap, color: "#FD7E14", bg: "#FFF4E6" },
  { name: "Cirurgia Geral", icon: Scissors, color: "#037FA3", bg: "#E0F4FA" },
  { name: "Oftalmologia", icon: Eye, color: "#1098AD", bg: "#E3FAFC" },
  { name: "Urologia", icon: Droplets, color: "#1C7ED6", bg: "#E7F5FF" },
  { name: "Endocrinologia", icon: BarChart2, color: "#0CA678", bg: "#E6FCF5" },
];

export function SpecialtiesSection() {
  const [search, setSearch] = useState("");

  const filtered = ALL_SPECIALTIES.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="especialidades"
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
          className="text-center mb-12"
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
            Especialidades
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#0F1F2A",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Encontre o especialista
            <br />
            que você precisa.
          </h2>
          <p style={{ color: "#6B7C8D", fontSize: "16px", lineHeight: 1.6 }}>
            Contamos com médicos altamente qualificados em diversas especialidades.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative max-w-lg mx-auto mb-12"
        >
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
            style={{ color: "#8FA5B1" }}
          />
          <input
            type="text"
            placeholder="Qual especialidade você procura?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border transition-all outline-none focus:shadow-lg focus:shadow-[#05B8D0]/15"
            style={{
              background: "#F5FAFB",
              border: "2px solid #E2EBF0",
              fontSize: "15px",
              color: "#0F1F2A",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#05B8D0";
              e.target.style.background = "#FFFFFF";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E2EBF0";
              e.target.style.background = "#F5FAFB";
            }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {filtered.map((spec, i) => (
            <motion.a
              key={spec.name}
              href="#agendamento"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center p-5 rounded-2xl border transition-all duration-250 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              style={{
                border: "1.5px solid #E2EBF0",
                background: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = spec.color;
                (e.currentTarget as HTMLElement).style.background = spec.bg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E2EBF0";
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-250 group-hover:scale-110"
                style={{ background: spec.bg }}
              >
                <spec.icon className="w-6 h-6" style={{ color: spec.color }} />
              </div>
              <span
                className="text-center"
                style={{ fontSize: "13px", fontWeight: 600, color: "#0F1F2A", lineHeight: 1.3 }}
              >
                {spec.name}
              </span>
            </motion.a>
          ))}
          {filtered.length === 0 && (
            <div
              className="col-span-full text-center py-12"
              style={{ color: "#8FA5B1", fontSize: "15px" }}
            >
              Nenhuma especialidade encontrada para "{search}".
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 transition-all duration-250 hover:bg-[#05B8D0] hover:text-white hover:border-[#05B8D0] hover:shadow-lg hover:shadow-[#05B8D0]/25 group"
            style={{
              borderColor: "#05B8D0",
              color: "#05B8D0",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Ver todas as especialidades
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
