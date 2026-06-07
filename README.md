# SAAH MATHWORKS — Corporate Website

Site web corporate pour **SAAH MATHWORKS**, une consultancy d'élite en AI Engineering & Data Science basée à Douala, Cameroun.

## Stack Technique

- **Next.js 14+** — App Router + React Server Components
- **Tailwind CSS** — Dark mode, cyber-premium aesthetic
- **Framer Motion** — Animations fluides
- **Lucide React** — Icônes modernes
- **TypeScript** — Typage strict
- **Formspree** — Formulaire de contact

## Installation

```bash
# 1. Créer le projet Next.js
npx create-next-app@latest saahmathworks --typescript --tailwind --eslint --app

# 2. Copier tous les fichiers dans le projet

# 3. Installer les dépendances supplémentaires
npm install framer-motion lucide-react clsx

# 4. Lancer en développement
npm run dev
```

## Configuration Formspree

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire
3. Remplacer `XXXXX` dans `app/contact/page.tsx` par votre ID Formspree :
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_ICI";
   ```

## Structure du projet

```
saahmathworks/
├── app/
│   ├── layout.tsx          # Layout global + metadata SEO
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux + utilities Tailwind
│   ├── expertise/
│   │   └── page.tsx        # Page services
│   ├── portfolio/
│   │   └── page.tsx        # Page réalisations
│   └── contact/
│       └── page.tsx        # Page contact avec Formspree
├── components/
│   ├── Navbar.tsx          # Navigation sticky glassmorphism
│   ├── Footer.tsx          # Footer complet
│   ├── ui/
│   │   └── AnimatedSection.tsx  # Wrapper animations scroll
│   └── sections/
│       ├── HeroScene.tsx   # Hero avec canvas animé
│       └── StatsRow.tsx    # Bande statistiques
├── tailwind.config.ts      # Config Tailwind étendue
├── next.config.js
└── tsconfig.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero, Valeurs, Expertise teaser, Stats |
| `/expertise` | Services détaillés (Agentic AI, RAG, Vision, etc.) |
| `/portfolio` | Réalisations avec résultats chiffrés |
| `/contact` | Formulaire Formspree + infos contact |

## Personnalisation

### Couleurs (tailwind.config.ts)
- **Cyan Neon** : `#00F0FF` — couleur principale
- **Emerald Neon** : `#00FF9F` — accent secondaire
- **Purple Neon** : `#C026D3` — accent tertiaire

### Informations de contact
Remplacez dans `components/Footer.tsx` et `app/contact/page.tsx` :
- Email : `contact@saahmathworks.com`
- Téléphone : `+237 6 96 69 75 51 00`
- Adresse : Douala, Cameroun

### SEO / Open Graph
Mettez à jour dans `app/layout.tsx` :
- URL du site
- Image OG (`/public/og-image.png` — 1200×630px)

## Performance

- ✅ React Server Components par défaut
- ✅ Animations Framer Motion côté client uniquement
- ✅ Images lazy-loaded
- ✅ Fonts Google optimisées via `@import` dans globals.css
- ✅ Code splitting automatique Next.js
