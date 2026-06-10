import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: {
    default: "SAAH MATHWORKS — AI Engineering & Data Science",
    template: "%s | SAAH MATHWORKS",
  },
  description:
    "Consultancy d'élite en Agentic AI, RAG, Computer Vision et Data Science basée à Douala, Cameroun. Architecturez l'intelligence autonome à l'échelle entreprise.",
  keywords: [
    "AI Engineering",
    "Data Science",
    "Agentic AI",
    "RAG",
    "Computer Vision",
    "LangGraph",
    "CrewAI",
    "Cameroun",
    "Douala",
    "Machine Learning",
    "LLM",
  ],
  authors: [{ name: "SAAH MATHWORKS" }],
  creator: "SAAH MATHWORKS",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://saahmathworks.com",
    siteName: "SAAH MATHWORKS",
    title: "SAAH MATHWORKS — AI Engineering & Data Science",
    description:
      "Consultancy d'élite en Agentic AI, RAG, Computer Vision et Data Science basée à Douala, Cameroun.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAH MATHWORKS — AI Engineering & Data Science",
    description:
      "Consultancy d'élite en Agentic AI, RAG, Computer Vision et Data Science basée à Douala, Cameroun.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-background text-text-primary font-body antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        {/* Widget chat flottant — présent sur toutes les pages */}
        <ChatWidget />
      </body>
    </html>
  );
}
