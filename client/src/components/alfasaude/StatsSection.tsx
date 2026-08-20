/* Design: cuidado institucional contemporâneo — indicadores institucionais com leitura rápida e discreta. */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 20, suffix: "+", label: "Especialidades", sub: "médicas disponíveis" },
  { value: 100, suffix: "+", label: "Profissionais", sub: "de saúde especializados" },
  { value: 10000, suffix: "+", label: "Pacientes", sub: "atendidos com excelência" },
  { value: 24, suffix: "h", label: "Suporte", sub: "cuidado e atendimento" },
];

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof STATS[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.value, 2000, inView);
  const display = stat.value >= 1000 ? `+${(count / 1000).toFixed(count > 0 ? 0 : 0)} mil` : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="text-center"
    >
      <div
        className="inline-flex flex-col items-center px-8 py-8 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          minWidth: "200px",
        }}
      >
        <div
          style={{
            fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            marginBottom: "6px",
          }}
        >
          {stat.value >= 1000 ? `+${Math.floor(count / 1000)} mil` : `${count}${stat.suffix}`}
        </div>
        <div
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#7ADFE8",
            marginBottom: "4px",
            lineHeight: 1.2,
          }}
        >
          {stat.label}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.4,
          }}
        >
          {stat.sub}
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A3D52 0%, #051B2C 50%, #03111E 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "#05B8D0" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-8"
        style={{ background: "#05B8D0" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(5,184,208,0.15)",
              border: "1px solid rgba(5,184,208,0.3)",
              color: "#7ADFE8",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            AlfaSaúde em Números
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Excelência reconhecida{" "}
            <span style={{ color: "#05B8D0" }}>em cada atendimento.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
