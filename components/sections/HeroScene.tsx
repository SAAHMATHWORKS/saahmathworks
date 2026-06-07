"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

/* Canvas-based animated background */
function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];
    const NUM_PARTICLES = 40;

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 200,
      });
    }

    const GRID = 60;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Draw grid
      ctx.strokeStyle = "rgba(0,240,255,0.035)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y <= H; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Animated glow dots at intersections near center
      const cx = W / 2, cy = H * 0.4;
      for (let x = 0; x <= W; x += GRID) {
        for (let y = 0; y <= H; y += GRID) {
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          if (dist > 350) continue;
          const wave = Math.sin(t * 0.02 + dist * 0.02) * 0.5 + 0.5;
          const alpha = wave * (1 - dist / 350) * 0.6;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,240,255,${alpha})`;
          ctx.fill();
        }
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 200;
        }
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.5;
        const isEmerald = p.life % 5 === 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isEmerald ? `rgba(0,255,159,${alpha})` : `rgba(0,240,255,${alpha})`;
        ctx.fill();
      });

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function HeroScene() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,240,255,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(0,255,159,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_70%,rgba(192,38,211,0.05)_0%,transparent_70%)]" />
      <GridCanvas />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Tag */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-pulse" />
            Douala, Cameroun · AI Engineering Consultancy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">Architecturer</span>
          <br />
          <span className="text-gradient-cyan">l&apos;Intelligence Autonome</span>
          <br />
          <span className="text-white">à l&apos;Échelle Entreprise</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          SAAH MATHWORKS conçoit et déploie des systèmes AI de production — 
          agents autonomes, architectures RAG, vision industrielle et analytics prédictif — 
          pour les entreprises qui refusent la médiocrité.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Démarrer un projet <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link href="/expertise" className="btn-secondary text-base px-8 py-4">
            Explorer l&apos;expertise
          </Link>
        </motion.div>

        {/* Social proof numbers */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: "20+", label: "Projets livrés" },
            { value: "95%+", label: "Précision modèles" },
            { value: "40%", label: "Réduction de coûts moy." },
            { value: "5+", label: "Années d'expertise AI" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-gradient-cyan">{value}</span>
              <span className="text-xs text-text-muted mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-text-muted">Scroll</span>
        <ChevronDown className="w-4 h-4 text-text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}
