import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#161616",
        "surface-3": "#1C1C1C",
        border: "#222222",
        "border-bright": "#333333",
        cyan: {
          neon: "#00F0FF",
          dim: "#00B8CC",
          muted: "rgba(0,240,255,0.15)",
        },
        emerald: {
          neon: "#00FF9F",
          dim: "#00CC7A",
          muted: "rgba(0,255,159,0.12)",
        },
        purple: {
          neon: "#C026D3",
          dim: "#9B1DB0",
          muted: "rgba(192,38,211,0.12)",
        },
        text: {
          primary: "#F0F0F0",
          secondary: "#A0A0A0",
          muted: "#606060",
        },
      },
      fontFamily: {
        display: ["'DM Sans'", "system-ui", "sans-serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "grid-cyan":
          "linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)",
        "glow-cyan":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,240,255,0.12) 0%, transparent 70%)",
        "glow-emerald":
          "radial-gradient(ellipse 50% 35% at 50% 100%, rgba(0,255,159,0.08) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,255,0.18) 0%, rgba(0,0,0,0) 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "border-flow": "borderFlow 3s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderFlow: {
          "0%, 100%": { borderColor: "rgba(0,240,255,0.4)" },
          "50%": { borderColor: "rgba(0,255,159,0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 20px rgba(0,240,255,0.3), 0 0 60px rgba(0,240,255,0.1)",
        "emerald-glow": "0 0 20px rgba(0,255,159,0.3), 0 0 60px rgba(0,255,159,0.1)",
        "purple-glow": "0 0 20px rgba(192,38,211,0.3), 0 0 60px rgba(192,38,211,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
