"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "20+", label: "Projets AI en production", color: "#00F0FF" },
  { value: "5+", label: "Années d'expertise ML/AI", color: "#00FF9F" },
  { value: "95%+", label: "Précision moyenne modèles", color: "#C026D3" },
  { value: "40%", label: "Réduction coûts opérationnels", color: "#00F0FF" },
  { value: "99.9%", label: "SLA uptime systèmes", color: "#00FF9F" },
];

export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 border-y border-[#1a1a1a] bg-[#0c0c0c] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,240,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {STATS.map(({ value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span
                className="text-3xl lg:text-4xl font-bold tracking-tight"
                style={{ color }}
              >
                {value}
              </span>
              <span className="text-xs text-text-muted leading-tight max-w-[120px]">{label}</span>
              <div
                className="w-8 h-0.5 rounded-full mt-1 opacity-60"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
