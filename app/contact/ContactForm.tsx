"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Brain,
  MessageSquare,
  Clock,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoedjov"; // ← Remplacer par votre ID Formspree

const PROJECT_TYPES = [
  { value: "", label: "Sélectionner un type de projet..." },
  { value: "agentic", label: "🤖 Agentic AI & Orchestration" },
  { value: "rag", label: "📚 RAG & Knowledge Systems" },
  { value: "vision", label: "👁️ Computer Vision" },
  { value: "timeseries", label: "📈 Time Series & Analytics" },
  { value: "llm", label: "🧠 LLMs & Modern AI Stack" },
  { value: "other", label: "💡 Autre / Discussion générale" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative pt-24 pb-32 px-4 sm:px-6 min-h-screen">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,240,255,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-block">
            <MessageSquare className="w-3 h-3" /> Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Transformons votre vision
            <br />
            <span className="text-gradient-cyan">en réalité.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Chaque grand système AI commence par une conversation. Décrivez
            votre défi, nous vous répondrons sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — contact info */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="rounded-2xl border border-[#222] bg-[#111] p-7">
              <h2 className="text-base font-semibold text-white mb-6">
                Informations de contact
              </h2>
              <div className="space-y-5">
                <a
                  href="mailto:contact@saahmathworks.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,240,255,0.12)] transition-colors">
                    <Mail className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">
                      Email professionnel
                    </p>
                    <p className="text-sm text-white group-hover:text-[#00F0FF] transition-colors">
                      contact@saahmathworks.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+237600000000"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,159,0.08)] border border-[rgba(0,255,159,0.15)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,255,159,0.12)] transition-colors">
                    <Phone className="w-4 h-4 text-[#00FF9F]" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Téléphone</p>
                    <p className="text-sm text-white group-hover:text-[#00FF9F] transition-colors">
                      +237 6 96 69 75 51
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(192,38,211,0.08)] border border-[rgba(192,38,211,0.15)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#C026D3]" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">
                      Localisation
                    </p>
                    <p className="text-sm text-white">Douala, Cameroun</p>
                    <p className="text-xs text-text-muted">
                      Disponibles pour missions internationales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-[rgba(0,240,255,0.15)] bg-[rgba(0,240,255,0.03)] p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-sm font-medium text-white">
                  Temps de réponse
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                Nous répondons à toutes les demandes dans les{" "}
                <strong className="text-white">24 heures ouvrées</strong>.
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-pulse" />
                <span className="text-xs text-[#00FF9F] font-mono">
                  Disponibles maintenant
                </span>
              </div>
            </div>

            {/* What to expect */}
            <div className="rounded-2xl border border-[#222] bg-[#111] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-4 h-4 text-[#00FF9F]" />
                <span className="text-sm font-medium text-white">
                  Ce qui vous attend
                </span>
              </div>
              <div className="space-y-3">
                {[
                  "Analyse gratuite de votre problématique",
                  "Recommandation d'architecture sur mesure",
                  "Estimation effort & timeline réaliste",
                  "Pas de jargon, que des solutions concrètes",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[rgba(0,255,159,0.1)] border border-[rgba(0,255,159,0.2)] flex items-center justify-center text-[#00FF9F] text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-[#222] bg-[#111] p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[rgba(0,255,159,0.1)] border border-[rgba(0,255,159,0.3)] flex items-center justify-center mb-6 shadow-emerald-glow">
                      <CheckCircle className="w-10 h-10 text-[#00FF9F]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      Message envoyé !
                    </h2>
                    <p className="text-text-secondary max-w-sm">
                      Merci pour votre message. Notre équipe vous répondra dans
                      les 24 heures ouvrées.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Formulaire de contact"
                  >
                    <h2 className="text-xl font-bold text-white mb-7">
                      Démarrer une conversation
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-text-secondary mb-2"
                        >
                          Nom complet <span className="text-[#00F0FF]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="input-field"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-text-secondary mb-2"
                        >
                          Email professionnel{" "}
                          <span className="text-[#00F0FF]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean@entreprise.com"
                          className="input-field"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-medium text-text-secondary mb-2"
                      >
                        Type de projet <span className="text-[#00F0FF]">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="input-field appearance-none cursor-pointer"
                        aria-required="true"
                      >
                        {PROJECT_TYPES.map(({ value, label }) => (
                          <option
                            key={value}
                            value={value}
                            disabled={value === ""}
                          >
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-text-secondary mb-2"
                      >
                        Décrivez votre projet{" "}
                        <span className="text-[#00F0FF]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre défi, vos données disponibles, vos objectifs mesurables..."
                        className="input-field resize-none"
                        aria-required="true"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm mb-5 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center text-xs">
                          !
                        </span>
                        Une erreur s&apos;est produite. Veuillez réessayer ou
                        contacter directement.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      aria-label="Envoyer le message"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-text-muted text-center mt-4">
                      Vos données ne sont jamais partagées avec des tiers.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
