import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const TECH_BADGES = [
  "LangGraph",
  "CrewAI",
  "Claude AI",
  "Python",
  "Next.js",
  "FastAPI",
  "PyTorch",
  "FAISS",
  "Llama 3",
  "Grok",
];

const SERVICES_LINKS = [
  { href: "/expertise#agentic", label: "Agentic AI" },
  { href: "/expertise#rag", label: "RAG & Knowledge Systems" },
  { href: "/expertise#vision", label: "Computer Vision" },
  { href: "/expertise#timeseries", label: "Time Series Analytics" },
  { href: "/expertise#llm", label: "LLMs & AI Stack" },
];

const COMPANY_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/expertise", label: "Expertise" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a1a1a] bg-[#080808] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[rgba(0,240,255,0.03)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-5 group w-fit"
            >
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#00FF9F] opacity-20" />
                <div className="absolute inset-0 rounded-lg border border-[rgba(0,240,255,0.4)]" />
                <Zap
                  className="w-4 h-4 text-[#00F0FF] relative z-10"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                <span className="text-white">SAAH</span>
                <span className="text-gradient-cyan"> MATHWORKS</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Consultancy d&apos;élite en AI Engineering et Data Science. Nous
              architecturons l&apos;intelligence autonome à l&apos;échelle
              entreprise.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/SAAHMATHWORKS",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/thibaut-saah",
                  label: "LinkedIn",
                },
                {
                  Icon: Twitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#2a2a2a]
                             text-text-muted hover:text-[#00F0FF] hover:border-[rgba(0,240,255,0.3)]
                             hover:bg-[rgba(0,240,255,0.05)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary hover:text-[#00F0FF] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#00F0FF] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary hover:text-[#00F0FF] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#00F0FF] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">
                  Douala, Cameroun
                  <br />
                  <span className="text-text-muted text-xs">
                    Afrique Centrale
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <a
                  href="mailto:contact@saahmathworks.com"
                  className="text-sm text-text-secondary hover:text-[#00F0FF] transition-colors"
                >
                  contact@saahmathworks.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <a
                  href="tel:+237600000000"
                  className="text-sm text-text-secondary hover:text-[#00F0FF] transition-colors"
                >
                  +237 6 96 69 75 51
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#00F0FF] font-medium hover:text-[#00FF9F] transition-colors"
            >
              Nous contacter <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Tech badges */}
        <div className="py-6 border-t border-[#1a1a1a]">
          <p className="text-xs text-text-muted mb-3 font-mono uppercase tracking-widest">
            Stack Technologique
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-mono border border-[#2a2a2a] text-text-muted bg-[#0e0e0e]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} SAAH MATHWORKS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9F] animate-pulse" />
            <span className="text-xs text-text-muted font-mono">
              Systèmes opérationnels — Douala, CM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
