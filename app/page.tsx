import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight, Brain, GitBranch, BarChart3, Eye,
  Cpu, Layers, TrendingUp, Shield,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroScene from "@/components/sections/HeroScene";
import StatsRow from "@/components/sections/StatsRow";

export const metadata: Metadata = {
  title: "SAAH MATHWORKS — AI Engineering & Data Science",
  description:
    "Consultancy d'élite en Agentic AI, RAG, Computer Vision et Data Science basée à Douala, Cameroun.",
};

/* ── Data ─────────────────────────────────────── */
const VALUES = [
  {
    icon: Cpu,
    title: "Production-First AI",
    desc: "Chaque système que nous livrons est prêt pour la production dès le premier jour. Robustesse, monitoring et performance au cœur de chaque architecture.",
    accent: "cyan",
  },
  {
    icon: Brain,
    title: "Rigueur Mathématique",
    desc: "Nos solutions sont fondées sur une théorie solide — de l'algèbre linéaire à l'inférence bayésienne, nous privilégions la rigueur à l'empirisme aveugle.",
    accent: "emerald",
  },
  {
    icon: Layers,
    title: "Architectures Scalables",
    desc: "Conçus pour des dizaines d'utilisateurs ou des millions. Nos systèmes évoluent sans refonte grâce à des patterns d'architecture éprouvés.",
    accent: "purple",
  },
  {
    icon: GitBranch,
    title: "Innovation Agentique",
    desc: "Pionniers dans la conception de systèmes multi-agents autonomes capables d'orchestrer des workflows complexes sans intervention humaine continue.",
    accent: "cyan",
  },
];

const EXPERTISE_TEASER = [
  {
    icon: Brain,
    title: "Agentic AI & Orchestration",
    desc: "Systèmes multi-agents autonomes avec LangGraph, CrewAI et workflows intelligents.",
    href: "/expertise#agentic",
    color: "#00F0FF",
  },
  {
    icon: GitBranch,
    title: "RAG & Knowledge Systems",
    desc: "Architectures RAG de pointe avec semantic search et context engineering avancé.",
    href: "/expertise#rag",
    color: "#00FF9F",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Détection d'objets, segmentation sémantique et vision industrielle en temps réel.",
    href: "/expertise#vision",
    color: "#C026D3",
  },
  {
    icon: BarChart3,
    title: "Time Series Analytics",
    desc: "Forecasting haute performance, anomaly detection et modèles quantitatifs.",
    href: "/expertise#timeseries",
    color: "#00F0FF",
  },
  {
    icon: Cpu,
    title: "LLMs & Modern AI Stack",
    desc: "Intégration et fine-tuning de Claude, Llama 3, Grok et autres modèles frontier.",
    href: "/expertise#llm",
    color: "#00FF9F",
  },
];

const accentStyles: Record<string, string> = {
  cyan: "border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.04)] hover:border-[rgba(0,240,255,0.4)] hover:shadow-cyan-glow",
  emerald: "border-[rgba(0,255,159,0.2)] bg-[rgba(0,255,159,0.04)] hover:border-[rgba(0,255,159,0.4)] hover:shadow-emerald-glow",
  purple: "border-[rgba(192,38,211,0.2)] bg-[rgba(192,38,211,0.04)] hover:border-[rgba(192,38,211,0.4)] hover:shadow-purple-glow",
};

const iconAccent: Record<string, string> = {
  cyan: "text-[#00F0FF]",
  emerald: "text-[#00FF9F]",
  purple: "text-[#C026D3]",
};

/* ── Page ─────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="relative">
      {/* ── HERO ── */}
      <HeroScene />

      {/* ── VALUES ── */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag mb-4 inline-block">
              <Shield className="w-3 h-3" /> Nos Principes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              L&apos;excellence n&apos;est pas une option,<br />
              <span className="text-gradient-cyan">c&apos;est notre standard</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div
                  className={`h-full p-7 rounded-2xl border transition-all duration-500 group cursor-default ${accentStyles[v.accent]}`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5
                               bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                               group-hover:scale-110 transition-transform duration-300`}
                  >
                    <v.icon className={`w-5 h-5 ${iconAccent[v.accent]}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2.5">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsRow />

      {/* ── EXPERTISE TEASER ── */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(0,255,159,0.04)] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-tag mb-4 inline-block">
                <TrendingUp className="w-3 h-3" /> Domaines d&apos;expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
                Cinq piliers,<br />
                <span className="text-gradient-full">une vision</span>
              </h2>
            </div>
            <Link
              href="/expertise"
              className="btn-secondary shrink-0 self-start sm:self-auto"
            >
              Voir tout l&apos;expertise <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPERTISE_TEASER.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group flex flex-col h-full p-7 rounded-2xl bg-[#111111] border border-[#1e1e1e]
                             hover:border-[rgba(0,240,255,0.15)] hover:shadow-card-hover transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-text-muted group-hover:text-[#00F0FF] 
                                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2.5 group-hover:text-[#00F0FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </Link>
              </AnimatedSection>
            ))}

            {/* CTA card */}
            <AnimatedSection delay={0.4} className="md:col-span-2 lg:col-span-1">
              <div className="h-full flex flex-col items-start justify-between p-7 rounded-2xl neon-border-cyan bg-[rgba(0,240,255,0.03)]">
                <div>
                  <p className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
                    Votre projet
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Discutons de votre vision
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Chaque transformation commence par une conversation. Partagez votre défi, 
                    nous architectorons la solution.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary mt-6"
                >
                  Démarrer un projet <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="section-tag mb-4 inline-block">
                <Brain className="w-3 h-3" /> Pourquoi SAAH MATHWORKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Nous ne construisons pas des démos.<br />
                <span className="text-gradient-cyan">Nous livrons des systèmes.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Dans un marché saturé de preuves de concept qui ne passent jamais en production, 
                SAAH MATHWORKS se distingue par une obsession pour les résultats mesurables. 
                Chaque ligne de code est écrite avec la production en tête.
              </p>
              <div className="space-y-4">
                {[
                  "Architecture MLOps robuste et observable",
                  "Expertise africaine avec standards mondiaux",
                  "Équipes pluridisciplinaires (ML + Ingénierie + Domaine métier)",
                  "Support et monitoring post-déploiement inclus",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/portfolio" className="btn-secondary mt-8 inline-flex">
                Voir nos réalisations <ArrowUpRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Visual panel */}
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Terminal-like card */}
                <div className="rounded-2xl border border-[#2a2a2a] bg-[#0e0e0e] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e1e] bg-[#111]">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-xs font-mono text-text-muted">agent_pipeline.py</span>
                  </div>
                  <div className="p-5 font-mono text-sm space-y-1">
                    {[
                      { color: "#606060", text: "# Multi-Agent Orchestration" },
                      { color: "#00F0FF", text: "from", extra: { color: "#F0F0F0", text: " langgraph import StateGraph" } },
                      { color: "#606060", text: "" },
                      { color: "#00FF9F", text: "graph = StateGraph(AgentState)" },
                      { color: "#A0A0A0", text: 'graph.add_node("planner", planner_agent)' },
                      { color: "#A0A0A0", text: 'graph.add_node("executor", exec_agent)' },
                      { color: "#A0A0A0", text: 'graph.add_node("critic", critic_agent)' },
                      { color: "#606060", text: "" },
                      { color: "#00FF9F", text: "# Autonomous workflow compiled" },
                      { color: "#C026D3", text: "pipeline = graph.compile()" },
                      { color: "#F0F0F0", text: "result = pipeline.invoke(task)" },
                    ].map((line, i) => (
                      <div key={i} style={{ color: line.color }}>
                        {line.text}
                        {line.extra && <span style={{ color: line.extra.color }}>{line.extra.text}</span>}
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 pt-2">
                      <span className="w-2 h-4 bg-[#00F0FF] animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#111] border border-[rgba(0,255,159,0.3)] shadow-emerald-glow">
                  <p className="text-xs font-mono text-[#00FF9F]">✓ Production Ready</p>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#111] border border-[rgba(0,240,255,0.3)] shadow-cyan-glow">
                  <p className="text-xs font-mono text-[#00F0FF]">⚡ 99.9% Uptime SLA</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
