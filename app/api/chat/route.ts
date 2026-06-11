import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de SAAH MATHWORKS, une consultancy d'élite en AI Engineering, Data Science et développement logiciel basée à Douala, Cameroun.

Ton rôle est d'aider les visiteurs à comprendre nos services et à évaluer si nous pouvons répondre à leurs besoins.

## Nos services :
1. **Agentic AI & Orchestration** : Systèmes multi-agents autonomes avec LangGraph, CrewAI. Automatisation de workflows cognitifs complexes.
2. **RAG & Knowledge Systems** : Architectures RAG avancées, semantic search, Claude AI. Permettre aux LLMs d'accéder à la connaissance interne d'une entreprise.
3. **Computer Vision** : Détection d'objets (YOLOv9), segmentation sémantique, vision industrielle temps réel (< 50ms).
4. **Time Series & Predictive Analytics** : Forecasting haute performance, anomaly detection, modèles quantitatifs.
5. **LLMs & Modern AI Stack** : Intégration Claude, Llama 3, fine-tuning, déploiement on-premise.
6. **Développement Web & SaaS** : Applications Django (backend robuste, APIs REST), SaaS complets Next.js + FastAPI (architecture moderne, scalable, production-ready).
7. **Connectivité Starlink au Cameroun** : Installation et configuration professionnelle d'antennes Starlink sur toute l'étendue du Cameroun — 450 000 FCFA tout frais compris (matériel, déplacement, installation, configuration réseau).

## Réalisations clés :
- SmartAsset AI : -40% coûts maintenance, 95% précision prédiction pannes
- Agentic Logistics Platform : -35% coûts logistiques, 3000+ décisions auto/heure
- Vision Industrielle QC : 99.2% précision, < 30ms latence
- Enterprise Document Intelligence : +400% vitesse recherche, 4.8/5 satisfaction

## Contact :
- Email : saahthibaut@gmail.com ou saahmathworks@gmail.com ou contact@saahmathworks.com
- Téléphone : +237 6 96 69 75 51 ou +237 6 77 22 11 75
- Localisation : Douala, Cameroun

## Règles de comportement :
- Réponds toujours en français sauf si le visiteur écrit dans une autre langue
- Sois concis, professionnel et chaleureux
- Si une question dépasse tes connaissances sur SAAH MATHWORKS, invite à contacter directement via /contact
- Ne fabrique jamais de prix ou de délais (sauf pour Starlink : 450 000 FCFA tout frais compris) — pour les autres projets, dis que ça dépend du scope et invite à consulter
- Maximum 3 paragraphes par réponse pour rester lisible dans le chat
- Tu peux utiliser des emojis avec modération`;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY is not set");
      return NextResponse.json({ error: "Clé API manquante" }, { status: 500 });
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages invalides" },
        { status: 400 }
      );
    }

    // Claude API n'accepte pas de commencer par un message assistant
    const userAndAssistantMessages = messages.filter(
      (m: { role: string }) => m.role === "user" || m.role === "assistant"
    );

    const firstUserIndex = userAndAssistantMessages.findIndex(
      (m: { role: string }) => m.role === "user"
    );

    const cleanMessages =
      firstUserIndex >= 0
        ? userAndAssistantMessages.slice(firstUserIndex)
        : userAndAssistantMessages;

    if (cleanMessages.length === 0) {
      return NextResponse.json(
        { error: "Aucun message utilisateur trouvé" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: cleanMessages,
    });

    const content =
      response.content[0]?.type === "text"
        ? response.content[0].text
        : "Désolé, je n'ai pas pu générer une réponse.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}
