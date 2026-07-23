import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main theme colors
        background: "#0F172A",
        surface: "#111827",
        "surface-2": "#1E293B",

        // Borders
        border: "#334155",
        "border-strong": "#475569",

        // Typography
        foreground: "#FFFFFF",
        text: "#CBD5E1",
        muted: "#94A3B8",
        "muted-2": "#64748B",

        // Brand colors
        accent: {
          DEFAULT: "#3B82F6",
          dim: "#2563EB",
          light: "#60A5FA",
          glow: "rgba(59,130,246,0.35)",
        },

        success: "#22C55E",
      },

      fontFamily: {
        display: [
          "var(--font-display)",
          "system-ui",
          "sans-serif",
        ],

        sans: [
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "var(--font-mono)",
          "monospace",
        ],
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",

        "radial-glow":
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.18), transparent 70%)",

        "accent-gradient":
          "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #818CF8 100%)",
      },

      boxShadow: {
        glass:
          "0 8px 32px rgba(15,23,42,0.55)",

        "glow-sm":
          "0 0 24px rgba(59,130,246,0.25)",

        "glow-md":
          "0 0 48px rgba(59,130,246,0.35)",
      },

      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-12px)",
          },
        },

        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
          },

          "50%": {
            opacity: "1",
          },
        },

        marquee: {
          "0%": {
            transform: "translateX(0)",
          },

          "100%": {
            transform: "translateX(-50%)",
          },
        },

        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        "fade-up":
          "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",

        float:
          "float 6s ease-in-out infinite",

        "pulse-glow":
          "pulse-glow 3s ease-in-out infinite",

        marquee:
          "marquee 28s linear infinite",

        "spin-slow":
          "spin-slow 12s linear infinite",
      },

      maxWidth: {
        "8xl": "90rem",
      },
    },
  },

  plugins: [],
};

export default config;