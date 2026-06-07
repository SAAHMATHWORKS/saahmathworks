"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/expertise", label: "Expertise" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#00FF9F] opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 rounded-lg border border-[rgba(0,240,255,0.4)]" />
                <Zap className="w-4 h-4 text-[#00F0FF] relative z-10" strokeWidth={2.5} />
              </div>
              <span className="font-display font-700 text-base tracking-tight">
                <span className="text-white">SAAH</span>
                <span className="text-gradient-cyan font-bold"> MATHWORKS</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-[#00F0FF]"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-[rgba(0,240,255,0.07)] border border-[rgba(0,240,255,0.15)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium
                           bg-gradient-to-r from-[#00F0FF] to-[#00CC7A] text-black
                           hover:shadow-cyan-glow hover:scale-[1.02] transition-all duration-300"
                aria-label="Obtenir une consultation"
              >
                Obtenir une Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[#2a2a2a] text-text-secondary hover:text-text-primary hover:border-[rgba(0,240,255,0.3)] transition-all"
                aria-label="Menu mobile"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-[#1e1e1e]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Navigation mobile">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#00F0FF] bg-[rgba(0,240,255,0.07)] border border-[rgba(0,240,255,0.15)]"
                        : "text-text-secondary hover:text-text-primary hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium
                           bg-gradient-to-r from-[#00F0FF] to-[#00CC7A] text-black"
              >
                Obtenir une Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
