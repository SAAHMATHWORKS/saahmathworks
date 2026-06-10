import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Layers,
  Lightbulb,
  Package,
  Wrench,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES, getServiceBySlug } from "../data";

/* ── Static params for all slugs ──────────── */
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic metadata ─────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return { title: "Non trouvé" };
  return {
    title: `${svc.title} — SAAH MATHWORKS`,
    description: svc.description,
  };
}

/* ── Page ─────────────────────────────────── */
export default function ExpertiseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) notFound();

  const { detail, color } = svc;

  return (
    <div className="relative pt-24 pb-32 px-4 sm:px-6">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Breadcrumb ── */}
        <AnimatedSection direction="none" className="mb-10">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à l&apos;expertise
          </Link>
        </AnimatedSection>

        {/* ── Hero ── */}
        <AnimatedSection className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: `${color}12`,
                border: `1px solid ${color}30`,
              }}
            >
              <svc.icon className="w-7 h-7" style={{ color }} />
            </div>
            <div>
              <span className="text-xs font-mono mb-2 block" style={{ color }}>
                {svc.tag} / {svc.slug}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {svc.title}
              </h1>
              <p className="text-lg mt-2" style={{ color }}>
                {svc.subtitle}
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
            {svc.description}
          </p>
        </AnimatedSection>

        {/* ── Metrics ── */}
        <AnimatedSection delay={0.05} className="mb-16">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
            style={{ borderColor: `${color}20` }}
          >
            {[
              ...svc.metrics,
              ...svc.features
                .slice(0, 2)
                .map((f) => ({ val: "✓", label: f.text })),
            ]
              .slice(0, 4)
              .map(({ val, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center p-6 text-center bg-[#0e0e0e]"
                >
                  <span className="text-3xl font-bold mb-1" style={{ color }}>
                    {val}
                  </span>
                  <span className="text-xs text-text-secondary leading-tight">
                    {label}
                  </span>
                </div>
              ))}
          </div>
        </AnimatedSection>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Problem */}
          <AnimatedSection
            delay={0.05}
            direction="left"
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl border p-8"
              style={{
                borderColor: `${color}20`,
                backgroundColor: `${color}05`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5" style={{ color }} />
                <h2 className="text-lg font-semibold text-white">
                  Le problème que nous résolvons
                </h2>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {detail.problem}
              </p>
            </div>
          </AnimatedSection>

          {/* Approach */}
          <AnimatedSection delay={0.08} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-[#222] bg-[#111] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5" style={{ color }} />
                <h2 className="text-lg font-semibold text-white">
                  Notre approche
                </h2>
              </div>
              <ol className="space-y-4">
                {detail.approach.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${color}15`,
                        color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>

          {/* Deliverables */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="h-full rounded-2xl border border-[#222] bg-[#111] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-5 h-5" style={{ color }} />
                <h2 className="text-lg font-semibold text-white">Livrables</h2>
              </div>
              <ul className="space-y-4">
                {detail.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color }}
                    />
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Tech stack ── */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="rounded-2xl border border-[#222] bg-[#111] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-5 h-5" style={{ color }} />
              <h2 className="text-lg font-semibold text-white">
                Stack Technologique
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {detail.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-mono border transition-colors duration-200"
                  style={{
                    borderColor: `${color}25`,
                    color,
                    backgroundColor: `${color}08`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Use cases ── */}
        <AnimatedSection delay={0.1} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Cas d&apos;usage typiques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {detail.useCases.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border p-6 transition-all duration-300 hover:border-opacity-60"
                style={{
                  borderColor: `${color}20`,
                  backgroundColor: `${color}04`,
                }}
              >
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Navigation between services ── */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#0e0e0e] p-6">
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
              Autres expertises
            </p>
            <div className="flex flex-wrap gap-3">
              {SERVICES.filter((s) => s.slug !== svc.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/expertise/${s.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm border border-[#2a2a2a] text-text-secondary hover:text-white hover:border-[rgba(0,240,255,0.3)] transition-all duration-200"
                >
                  <s.icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection delay={0.1}>
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: `${color}25`, backgroundColor: `${color}05` }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prêt à démarrer un projet {svc.title} ?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Discutons de vos objectifs. Première consultation gratuite,
              architecture sur mesure livrée sous 48h.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex text-base px-8 py-4"
            >
              Obtenir une consultation <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
