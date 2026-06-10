import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES } from "./data";

export const metadata: Metadata = {
  title: "Expertise & Services",
  description:
    "Agentic AI, RAG, Computer Vision, Time Series et LLMs — notre expertise technique complète.",
};

export default function ExpertisePage() {
  return (
    <div className="relative pt-24 pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-tag mb-4 inline-block">
            <Brain className="w-3 h-3" /> Expertise Technique
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cinq domaines.
            <br />
            <span className="text-gradient-cyan">
              Un niveau d&apos;excellence.
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Notre expertise couvre l&apos;intégralité de la chaîne de valeur AI
            — de la recherche à la production, du prototype au système critique.
          </p>
        </AnimatedSection>

        {/* ── Service cards ── */}
        <div className="space-y-6">
          {SERVICES.map((svc) => (
            <AnimatedSection key={svc.id} delay={0.05}>
              <Link
                href={`/expertise/${svc.slug}`}
                id={svc.id}
                className={`group block relative rounded-2xl border overflow-hidden
                            transition-all duration-500 cursor-pointer
                            hover:scale-[1.008] ${svc.glowClass}`}
                style={{ borderColor: svc.borderColor }}
                aria-label={`Voir le détail : ${svc.title}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${svc.gradient} pointer-events-none`}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left panel */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-start gap-5 mb-7">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${svc.color}12`,
                          border: `1px solid ${svc.color}25`,
                        }}
                      >
                        <svc.icon
                          className="w-6 h-6"
                          style={{ color: svc.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <span
                          className="text-xs font-mono mb-1 block"
                          style={{ color: svc.color }}
                        >
                          {svc.tag}
                        </span>
                        <h2 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                          {svc.title}
                        </h2>
                        <p
                          className="text-sm mt-1"
                          style={{ color: svc.color }}
                        >
                          {svc.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-text-muted shrink-0 mt-1 group-hover:text-[#00F0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
                            <Icon
                              className="w-3.5 h-3.5"
                              style={{ color: svc.color }}
                            />
                          </div>
                          <span className="text-sm text-text-secondary">
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: svc.color }}
                    >
                      Voir en détail
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Right panel — metrics */}
                  <div
                    className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l"
                    style={{ borderColor: `${svc.color}15` }}
                  >
                    {svc.metrics.map(({ val, label }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <span
                          className="text-4xl font-bold"
                          style={{ color: svc.color }}
                        >
                          {val}
                        </span>
                        <span className="text-sm text-text-secondary">
                          {label}
                        </span>
                        <div
                          className="h-0.5 w-12 rounded-full mt-1"
                          style={{ backgroundColor: `${svc.color}40` }}
                        />
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {svc.detail.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono border border-[#2a2a2a] text-text-muted bg-[#111]"
                        >
                          {tech}
                        </span>
                      ))}
                      {svc.detail.techStack.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono border border-[#2a2a2a] text-text-muted bg-[#111]">
                          +{svc.detail.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
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
              Les vrais défis sont rarement monolithiques. Discutons d&apos;une
              approche sur mesure qui combine plusieurs de nos expertises.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex text-base px-8 py-4"
            >
              Obtenir une consultation gratuite{" "}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
