import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain, GitBranch, Eye, BarChart3, Cpu,
  ArrowUpRight, Zap, Database, Network,
  LineChart, Search, Boxes, Workflow,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Expertise & Services",
  description:
    "Agentic AI, RAG, Computer Vision, Time Series et LLMs — notre expertise technique complète.",
};

/* ── Service data ─────────────────────────── */
const SERVICES = [
  {
    id: "agentic",
    icon: Brain,
    tag: "01",
    title: "Agentic AI & Orchestration",
    subtitle: "Systèmes autonomes qui pensent, planifient et agissent",
    description:
      "Nous concevons des architectures multi-agents capables d'orchestrer des workflows complexes sans intervention humaine continue. Nos systèmes combinent planification, mémoire, raisonnement et exécution en boucles autonomes robustes.",
    color: "#00F0FF",
    features: [
      { icon: Network, text: "LangGraph pour graphes d'agents stateful" },
      { icon: Boxes, text: "CrewAI pour équipes d'agents spécialisés" },
      { icon: Workflow, text: "Multi-agent swarms & orchestration hiérarchique" },
      { icon: Zap, text: "Autonomous workflows avec human-in-the-loop" },
    ],
    metrics: [
      { val: "85%", label: "Automatisation tâches cognitives" },
      { val: "10x", label: "Vitesse d'exécution vs manuel" },
    ],
    gradient: "from-[rgba(0,240,255,0.1)] to-transparent",
    borderColor: "rgba(0,240,255,0.2)",
    glowClass: "hover:shadow-cyan-glow",
  },
  {
    id: "rag",
    icon: Database,
    tag: "02",
    title: "RAG & Knowledge Systems",
    subtitle: "La connaissance d'entreprise, accessible et intelligente",
    description:
      "Architectures RAG avancées qui permettent aux LLMs d'accéder à la connaissance interne de votre entreprise avec une précision et une pertinence maximales. Nous maîtrisons le context engineering pour des réponses toujours fondées.",
    color: "#00FF9F",
    features: [
      { icon: Search, text: "Semantic search avec FAISS, Weaviate, Pinecone" },
      { icon: Brain, text: "Claude AI & GPT-4 pour le raisonnement" },
      { icon: Database, text: "Chunking & embedding stratégies avancées" },
      { icon: GitBranch, text: "RAG hybride : dense + sparse retrieval" },
    ],
    metrics: [
      { val: "92%", label: "Précision des réponses" },
      { val: "3x", label: "Réduction hallucinations" },
    ],
    gradient: "from-[rgba(0,255,159,0.08)] to-transparent",
    borderColor: "rgba(0,255,159,0.2)",
    glowClass: "hover:shadow-emerald-glow",
  },
  {
    id: "vision",
    icon: Eye,
    tag: "03",
    title: "Computer Vision",
    subtitle: "Les machines qui voient et comprennent",
    description:
      "De la détection d'objets temps réel à la segmentation sémantique industrielle, nous déployons des modèles de vision performants adaptés à vos contraintes (edge, cloud, latence critique). Contrôle qualité, surveillance, analyse vidéo.",
    color: "#C026D3",
    features: [
      { icon: Eye, text: "Object Detection avec YOLOv9, RT-DETR" },
      { icon: Boxes, text: "Segmentation sémantique & d'instance" },
      { icon: Zap, text: "Industrial Vision temps réel (< 50ms)" },
      { icon: Brain, text: "Vision-Language Models (VLMs)" },
    ],
    metrics: [
      { val: "98%+", label: "mAP sur données clients" },
      { val: "< 50ms", label: "Inférence temps réel" },
    ],
    gradient: "from-[rgba(192,38,211,0.08)] to-transparent",
    borderColor: "rgba(192,38,211,0.2)",
    glowClass: "hover:shadow-purple-glow",
  },
  {
    id: "timeseries",
    icon: LineChart,
    tag: "04",
    title: "Time Series & Predictive Analytics",
    subtitle: "Anticiper l'avenir avec précision mathématique",
    description:
      "Forecasting haute performance, détection d'anomalies et modèles quantitatifs pour la finance, l'énergie, l'industrie et la logistique. Nous combinons méthodes statistiques classiques et deep learning pour des prédictions robustes.",
    color: "#00F0FF",
    features: [
      { icon: LineChart, text: "Forecasting avec Transformers & N-HiTS" },
      { icon: Zap, text: "Anomaly Detection en temps réel" },
      { icon: BarChart3, text: "Modèles quantitatifs & financiers" },
      { icon: Network, text: "MLFlow & pipeline MLOps complet" },
    ],
    metrics: [
      { val: "95%+", label: "Précision prédictions J+30" },
      { val: "60%", label: "Réduction faux positifs" },
    ],
    gradient: "from-[rgba(0,240,255,0.08)] to-transparent",
    borderColor: "rgba(0,240,255,0.2)",
    glowClass: "hover:shadow-cyan-glow",
  },
  {
    id: "llm",
    icon: Cpu,
    tag: "05",
    title: "LLMs & Modern AI Stack",
    subtitle: "Les meilleurs modèles, intégrés sans friction",
    description:
      "Intégration, fine-tuning et déploiement des modèles frontier les plus performants. Nous maîtrisons l'écosystème complet — de l'API aux déploiements on-premise — pour des solutions adaptées à vos contraintes de coût, latence et confidentialité.",
    color: "#00FF9F",
    features: [
      { icon: Brain, text: "Claude 3.5, GPT-4o, Grok intégrations" },
      { icon: Cpu, text: "Llama 3, Mistral fine-tuning & déploiement" },
      { icon: Zap, text: "Prompt engineering & DSPy optimization" },
      { icon: Database, text: "LLM observability & coût optimization" },
    ],
    metrics: [
      { val: "70%", label: "Réduction coûts API" },
      { val: "5x", label: "Amélioration qualité vs baseline" },
    ],
    gradient: "from-[rgba(0,255,159,0.08)] to-transparent",
    borderColor: "rgba(0,255,159,0.2)",
    glowClass: "hover:shadow-emerald-glow",
  },
];

/* ── Page ─────────────────────────────────────── */
export default function ExpertisePage() {
  return (
    <div className="relative pt-24 pb-32 px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <span className="section-tag mb-4 inline-block">
            <Brain className="w-3 h-3" /> Expertise Technique
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cinq domaines.
            <br />
            <span className="text-gradient-cyan">Un niveau d&apos;excellence.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Notre expertise couvre l&apos;intégralité de la chaîne de valeur AI — 
            de la recherche à la production, du prototype au système critique.
          </p>
        </AnimatedSection>

        {/* Services */}
        <div className="space-y-8">
          {SERVICES.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={0.05}>
              <div
                id={svc.id} className={`relative rounded-2xl border overflow-hidden transition-all duration-500 ${svc.glowClass}`}
                style={{ borderColor: svc.borderColor }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${svc.gradient} pointer-events-none`} />

                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left panel */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-start gap-5 mb-7">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${svc.color}12`,
                          border: `1px solid ${svc.color}25`,
                        }}
                      >
                        <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-mono mb-1 block"
                          style={{ color: svc.color }}
                        >
                          {svc.tag}
                        </span>
                        <h2 className="text-2xl font-bold text-white">{svc.title}</h2>
                        <p className="text-sm mt-1" style={{ color: svc.color }}>
                          {svc.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-8 max-w-xl">
                      {svc.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.features.map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${svc.color}10` }}
                          >
                            <Icon className="w-3.5 h-3.5" style={{ color: svc.color }} />
                          </div>
                          <span className="text-sm text-text-secondary">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel — metrics */}
                  <div
                    className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l"
                    style={{ borderColor: `${svc.color}15` }}
                  >
                    {svc.metrics.map(({ val, label }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <span className="text-4xl font-bold" style={{ color: svc.color }}>
                          {val}
                        </span>
                        <span className="text-sm text-text-secondary">{label}</span>
                        <div
                          className="h-0.5 w-12 rounded-full mt-1"
                          style={{ backgroundColor: `${svc.color}40` }}
                        />
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group"
                      style={{ color: svc.color }}
                    >
                      Discuter de ce service
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 text-center">
          <div className="rounded-2xl border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.03)] p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre projet ne rentre pas dans une case ?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Les vrais défis sont rarement monolithiques. Discutons d&apos;une approche sur mesure 
              qui combine plusieurs de nos expertises.
            </p>
            <Link href="/contact" className="btn-primary inline-flex text-base px-8 py-4">
              Obtenir une consultation gratuite <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
