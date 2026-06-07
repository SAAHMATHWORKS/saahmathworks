import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight, TrendingDown, TrendingUp, Zap,
  Eye, Database, Brain, BarChart3, Star,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Portfolio & Réalisations",
  description: "Découvrez nos projets AI en production — résultats mesurables et architectures robustes.",
};

/* ── Project data ─────────────────────────── */
const PROJECTS = [
  {
    id: "smartasset",
    tag: "Agentic AI · IoT · Finance",
    title: "SmartAsset AI",
    subtitle: "Gestion d'actifs prédictive avec intelligence agentique",
    description:
      "Plateforme de gestion d'actifs industriels combinant capteurs IoT, prédiction de défaillances et agents autonomes d'optimisation. Le système anticipe les pannes 72h à l'avance et recommande des actions de maintenance préventive.",
    icon: Brain,
    color: "#00F0FF",
    borderColor: "rgba(0,240,255,0.25)",
    bgColor: "rgba(0,240,255,0.04)",
    stack: ["LangGraph", "PyTorch", "TimesNet", "FastAPI", "InfluxDB"],
    results: [
      { icon: TrendingDown, value: "-40%", label: "Coûts de maintenance", positive: true },
      { icon: TrendingUp, value: "+95%", label: "Précision détection pannes", positive: true },
      { icon: Zap, value: "72h", label: "Anticipation défaillances", positive: true },
    ],
    visual: {
      lines: [
        "IoT Sensors → Stream Processor → Anomaly Detector",
        "Anomaly Detector → Planner Agent → Maintenance Queue",
        "Planner Agent → Report Generator → Dashboard",
      ],
      highlight: "Production · 50k+ capteurs · Temps réel",
    },
  },
  {
    id: "logistics",
    tag: "Agentic AI · Logistique",
    title: "Agentic Logistics Platform",
    subtitle: "Orchestration autonome de chaîne logistique",
    description:
      "Système multi-agents qui optimise en continu les routes de livraison, la gestion des stocks et les relations fournisseurs. Des agents spécialisés collaborent pour prendre des milliers de décisions logistiques par heure.",
    icon: Database,
    color: "#00FF9F",
    borderColor: "rgba(0,255,159,0.25)",
    bgColor: "rgba(0,255,159,0.04)",
    stack: ["CrewAI", "Claude 3.5", "Redis", "PostgreSQL", "Next.js"],
    results: [
      { icon: TrendingDown, value: "-35%", label: "Coûts logistiques", positive: true },
      { icon: TrendingUp, value: "+28%", label: "Efficacité livraisons", positive: true },
      { icon: Zap, value: "3k+", label: "Décisions auto/heure", positive: true },
    ],
    visual: {
      lines: [
        "Route Optimizer Agent → Fleet Manager Agent",
        "Inventory Agent → Supplier Negotiation Agent",
        "All Agents → Central Orchestrator → ERP",
      ],
      highlight: "Production · 500+ véhicules · 24/7",
    },
  },
  {
    id: "vision",
    tag: "Computer Vision · Industrie",
    title: "Vision Industrielle QC",
    subtitle: "Contrôle qualité automatisé par deep learning",
    description:
      "Système de contrôle qualité en temps réel pour une chaîne de production manufacturière. Détecte les défauts de surface avec une précision supérieure à l'inspection humaine, à cadence industrielle.",
    icon: Eye,
    color: "#C026D3",
    borderColor: "rgba(192,38,211,0.25)",
    bgColor: "rgba(192,38,211,0.04)",
    stack: ["YOLOv9", "PyTorch", "TensorRT", "ONNX", "FastAPI"],
    results: [
      { icon: TrendingUp, value: "99.2%", label: "Précision détection défauts", positive: true },
      { icon: TrendingDown, value: "-60%", label: "Coûts inspection humaine", positive: true },
      { icon: Zap, value: "< 30ms", label: "Latence d'inférence", positive: true },
    ],
    visual: {
      lines: [
        "Camera Array → Frame Preprocessor → YOLO v9",
        "YOLO v9 → Defect Classifier → Alert System",
        "Alert System → PLC Controller → Line Stop",
      ],
      highlight: "Production · 240 pièces/min · Edge deploy",
    },
  },
  {
    id: "docrag",
    tag: "RAG · LLM · Enterprise",
    title: "Enterprise Document Intelligence",
    subtitle: "RAG de niveau entreprise sur corpus documentaire massif",
    description:
      "Système RAG hybride permettant aux équipes d'interroger naturellement 500k+ documents internes. Architecture multi-index avec rerankig et synthèse structurée, intégré à Microsoft 365 et Slack.",
    icon: BarChart3,
    color: "#00F0FF",
    borderColor: "rgba(0,240,255,0.25)",
    bgColor: "rgba(0,240,255,0.04)",
    stack: ["Claude 3.5", "Weaviate", "Cohere Rerank", "FastAPI", "React"],
    results: [
      { icon: TrendingUp, value: "+400%", label: "Vitesse recherche documentaire", positive: true },
      { icon: TrendingDown, value: "-70%", label: "Temps de réponse aux requêtes", positive: true },
      { icon: Star, value: "4.8/5", label: "Score satisfaction utilisateurs", positive: true },
    ],
    visual: {
      lines: [
        "500k docs → Chunking → Embedding → Weaviate",
        "User Query → BM25 + Dense Retrieval → Reranker",
        "Reranker → Claude 3.5 → Structured Answer",
      ],
      highlight: "Production · 500k docs · 2000+ utilisateurs",
    },
  },
];

/* ── Page ─────────────────────────────────────── */
export default function PortfolioPage() {
  return (
    <div className="relative pt-24 pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-tag mb-4 inline-block">
            <Star className="w-3 h-3" /> Réalisations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Des résultats qui parlent.
            <br />
            <span className="text-gradient-full">Des chiffres qui prouvent.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Chaque projet est une preuve concrète de notre capacité à transformer 
            des défis complexes en systèmes AI robustes et mesurables.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.05}>
              <article
                className="rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.005]"
                style={{ borderColor: project.borderColor, backgroundColor: project.bgColor }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Main content */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    {/* Tag */}
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono mb-5"
                      style={{
                        color: project.color,
                        backgroundColor: `${project.color}10`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {project.tag}
                    </span>

                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm mb-5" style={{ color: project.color }}>
                      {project.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono border border-[#2a2a2a] text-text-muted bg-[#111]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Pipeline visual */}
                    <div className="rounded-xl bg-[#0e0e0e] border border-[#1e1e1e] p-4">
                      <p className="text-xs font-mono text-text-muted mb-3 uppercase tracking-widest">
                        Architecture Pipeline
                      </p>
                      <div className="space-y-2">
                        {project.visual.lines.map((line, li) => (
                          <div key={li} className="flex items-center gap-2 text-xs font-mono">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="text-text-secondary">{line}</span>
                          </div>
                        ))}
                      </div>
                      <div
                        className="mt-3 pt-3 border-t border-[#1e1e1e] text-xs font-mono"
                        style={{ color: project.color }}
                      >
                        ✓ {project.visual.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Results panel */}
                  <div
                    className="lg:col-span-1 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l"
                    style={{ borderColor: `${project.color}15` }}
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
                      Résultats Mesurables
                    </p>
                    <div className="space-y-8">
                      {project.results.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" style={{ color: project.color }} />
                            <span className="text-3xl font-bold" style={{ color: project.color }}>
                              {value}
                            </span>
                          </div>
                          <span className="text-sm text-text-secondary pl-6">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 text-center">
          <div className="rounded-2xl border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.03)] p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Votre réalisation sera la prochaine.
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Chaque projet ci-dessus a commencé par une conversation. 
              Quelle transformation souhaitez-vous démarrer ?
            </p>
            <Link href="/contact" className="btn-primary inline-flex text-base px-8 py-4">
              Lancer mon projet AI <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
