import {
  Brain,
  GitBranch,
  Eye,
  BarChart3,
  Cpu,
  Zap,
  Database,
  Network,
  LineChart,
  Search,
  Boxes,
  Workflow,
} from "lucide-react";

export interface ServiceFeature {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  text: string;
}

export interface ServiceMetric {
  val: string;
  label: string;
}

export interface ServiceDetail {
  problem: string;
  approach: string[];
  deliverables: string[];
  techStack: string[];
  useCases: { title: string; desc: string }[];
}

export interface Service {
  id: string;
  slug: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: ServiceFeature[];
  metrics: ServiceMetric[];
  gradient: string;
  borderColor: string;
  glowClass: string;
  detail: ServiceDetail;
}

export const SERVICES: Service[] = [
  {
    id: "agentic",
    slug: "agentic-ai",
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
      {
        icon: Workflow,
        text: "Multi-agent swarms & orchestration hiérarchique",
      },
      { icon: Zap, text: "Autonomous workflows avec human-in-the-loop" },
    ],
    metrics: [
      { val: "85%", label: "Automatisation tâches cognitives" },
      { val: "10x", label: "Vitesse d'exécution vs manuel" },
    ],
    gradient: "from-[rgba(0,240,255,0.1)] to-transparent",
    borderColor: "rgba(0,240,255,0.2)",
    glowClass: "hover:shadow-cyan-glow",
    detail: {
      problem:
        "Les entreprises perdent des milliers d'heures sur des workflows cognitifs répétitifs — analyse de documents, prise de décision structurée, coordination inter-équipes. Les solutions RPA classiques échouent dès que la tâche requiert du raisonnement.",
      approach: [
        "Modélisation du workflow existant et identification des nœuds automatisables",
        "Conception du graphe d'agents avec LangGraph (états, transitions, mémoire)",
        "Implémentation d'agents spécialisés avec CrewAI (Planner, Executor, Critic)",
        "Mise en place des guardrails, human-in-the-loop et mécanismes de fallback",
        "Déploiement, monitoring et itération continue",
      ],
      deliverables: [
        "Architecture multi-agents documentée et testée",
        "API REST exposant le pipeline agentique",
        "Dashboard de monitoring (traces, coûts, latence)",
        "Runbook opérationnel et guide de maintenance",
      ],
      techStack: [
        "LangGraph",
        "CrewAI",
        "LangChain",
        "Claude 3.5",
        "FastAPI",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      useCases: [
        {
          title: "Analyse contractuelle automatisée",
          desc: "Agent qui lit, extrait et synthétise des centaines de contrats juridiques en quelques minutes.",
        },
        {
          title: "Pipeline de veille stratégique",
          desc: "Multi-agents qui agrègent, analysent et rédigent des rapports de veille sectoriels quotidiens.",
        },
        {
          title: "Support client de niveau 2",
          desc: "Agent autonome qui résout les tickets complexes en consultant bases de connaissances et outils internes.",
        },
        {
          title: "Orchestration de workflows RH",
          desc: "Automatisation du cycle complet de recrutement — screening, scoring, planification des entretiens.",
        },
      ],
    },
  },
  {
    id: "rag",
    slug: "rag-knowledge",
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
    detail: {
      problem:
        "Les LLMs génériques hallucinent sur votre domaine métier et ignorent votre documentation interne. Les équipes perdent du temps à chercher des informations dispersées dans des dizaines de systèmes non interconnectés.",
      approach: [
        "Audit du corpus documentaire (formats, volumes, fraîcheur, qualité)",
        "Stratégie de chunking adaptée au contenu (hiérarchique, sémantique, par section)",
        "Choix et optimisation du modèle d'embedding (multilingual, spécialisé domaine)",
        "Architecture du retriever hybride (BM25 + dense + reranking)",
        "Context engineering et prompt design pour la génération finale",
      ],
      deliverables: [
        "Pipeline RAG complet et optimisé",
        "Interface de recherche ou API d'intégration",
        "Système d'évaluation automatique (RAGAS metrics)",
        "Pipeline d'ingestion continue pour maintenir la fraîcheur",
      ],
      techStack: [
        "Weaviate",
        "FAISS",
        "Pinecone",
        "Cohere Rerank",
        "Claude 3.5",
        "LangChain",
        "FastAPI",
        "Next.js",
      ],
      useCases: [
        {
          title: "Assistant documentaire enterprise",
          desc: "Chatbot qui répond précisément sur 500k+ documents internes avec citations sources.",
        },
        {
          title: "Knowledge base produit",
          desc: "Système qui permet aux équipes support de trouver instantanément les réponses techniques.",
        },
        {
          title: "Recherche réglementaire",
          desc: "Moteur qui navigue dans des corpus juridiques et réglementaires complexes.",
        },
        {
          title: "Onboarding intelligent",
          desc: "Assistant qui guide les nouvelles recrues à travers procédures et culture d'entreprise.",
        },
      ],
    },
  },
  {
    id: "vision",
    slug: "computer-vision",
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
    detail: {
      problem:
        "L'inspection visuelle manuelle est lente, coûteuse et inconsistante. Les taux d'erreur humains atteignent 5-15% sur des tâches répétitives. Les solutions de vision existantes manquent de flexibilité pour s'adapter à vos contraintes spécifiques.",
      approach: [
        "Définition précise de la tâche et des métriques de succès (mAP, latence, recall)",
        "Collecte et annotation des données avec des outils semi-automatiques",
        "Sélection et fine-tuning du modèle adapté (YOLO, RT-DETR, SAM, VLMs)",
        "Optimisation pour le déploiement cible (TensorRT, ONNX, quantization)",
        "Intégration dans le flux de production et monitoring continu",
      ],
      deliverables: [
        "Modèle optimisé pour votre environnement (edge/cloud/embedded)",
        "API d'inférence avec documentation complète",
        "Pipeline d'annotation et de ré-entraînement continu",
        "Dashboard de performance et alerting",
      ],
      techStack: [
        "YOLOv9",
        "RT-DETR",
        "PyTorch",
        "TensorRT",
        "ONNX",
        "OpenCV",
        "FastAPI",
        "Triton Server",
      ],
      useCases: [
        {
          title: "Contrôle qualité industriel",
          desc: "Détection de défauts de surface sur ligne de production à cadence industrielle.",
        },
        {
          title: "Comptage et tracking",
          desc: "Suivi de personnes, véhicules ou produits dans des environnements complexes.",
        },
        {
          title: "Analyse de documents visuels",
          desc: "Extraction d'information depuis formulaires, factures, plans techniques.",
        },
        {
          title: "Surveillance intelligente",
          desc: "Détection d'anomalies comportementales ou structurelles en temps réel.",
        },
      ],
    },
  },
  {
    id: "timeseries",
    slug: "time-series",
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
    detail: {
      problem:
        "Les décisions basées sur des données historiques statiques ou des règles expertes figées ne suffisent plus. La volatilité des marchés, des flux et des systèmes complexes réclame des modèles adaptatifs capables d'apprendre en continu.",
      approach: [
        "Analyse exploratoire de la série temporelle (stationnarité, saisonnalité, anomalies)",
        "Feature engineering temporel (lags, rolling stats, variables exogènes)",
        "Benchmarking de modèles (ARIMA, Prophet, N-HiTS, PatchTST, TiDE)",
        "Calibration de l'incertitude et intervalles de confiance",
        "MLOps : versioning, retraining automatique, drift detection",
      ],
      deliverables: [
        "Modèle de forecasting ou détection d'anomalies en production",
        "API de prédiction avec intervalles de confiance",
        "Pipeline de retraining automatique",
        "Rapport d'analyse et documentation des décisions modèles",
      ],
      techStack: [
        "PyTorch",
        "NeuralForecast",
        "StatsForecast",
        "Prophet",
        "MLflow",
        "FastAPI",
        "InfluxDB",
        "Grafana",
      ],
      useCases: [
        {
          title: "Prévision de demande",
          desc: "Optimisation des stocks et de la production via forecasting multi-horizons.",
        },
        {
          title: "Détection de fraude temps réel",
          desc: "Identification d'anomalies transactionnelles avec faible taux de faux positifs.",
        },
        {
          title: "Maintenance prédictive",
          desc: "Prédiction de défaillances équipement 72h avant leur survenue.",
        },
        {
          title: "Trading algorithmique",
          desc: "Modèles quantitatifs pour signaux d'entrée/sortie sur marchés financiers.",
        },
      ],
    },
  },
  {
    id: "llm",
    slug: "llm-ai-stack",
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
    detail: {
      problem:
        "Intégrer un LLM en production est facile. L'optimiser pour qu'il soit fiable, rapide, économique et sécurisé l'est beaucoup moins. La plupart des équipes restent bloquées sur des prototypes qui ne tiennent pas la charge ou coûtent trop cher.",
      approach: [
        "Audit de la tâche et sélection du modèle optimal (coût/qualité/latence)",
        "Prompt engineering systématique et évaluation comparative",
        "Fine-tuning si nécessaire (LoRA, QLoRA sur données propriétaires)",
        "Mise en place de l'observabilité LLM (traces, coûts, qualité)",
        "Optimisation continue : caching, routing, distillation",
      ],
      deliverables: [
        "Application LLM production-ready avec observabilité complète",
        "Benchmark comparatif des modèles testés",
        "Stratégie de coûts et de mise à l'échelle",
        "Guide de maintenance et d'évolution du système",
      ],
      techStack: [
        "Claude 3.5",
        "Llama 3",
        "Mistral",
        "Grok",
        "DSPy",
        "LangSmith",
        "vLLM",
        "Ollama",
        "FastAPI",
      ],
      useCases: [
        {
          title: "Génération de contenu structuré",
          desc: "Production automatisée de rapports, fiches produits, ou contenus marketing.",
        },
        {
          title: "Classification et extraction",
          desc: "Traitement massif de documents avec extraction d'entités et classification fine.",
        },
        {
          title: "Assistant métier spécialisé",
          desc: "LLM fine-tuné sur votre domaine pour des réponses expertes et précises.",
        },
        {
          title: "Déploiement on-premise",
          desc: "Llama 3 ou Mistral hébergés en interne pour données confidentielles.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
