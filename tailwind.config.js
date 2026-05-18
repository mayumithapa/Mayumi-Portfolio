/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        ink: {
          950: "#05050a",
          900: "#0a0a14",
          800: "#11111d",
          700: "#1a1a2a",
        },
        brand: {
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          cyan: "#22d3ee",
          mint: "#34d399",
          amber: "#fbbf24",
        },
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #22d3ee 100%)",
        "grad-soft":
          "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(217,70,239,0.12) 50%, rgba(34,211,238,0.18))",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "gradient-shift": "gradient-shift 12s ease infinite",
        "blob-float": "blob-float 18s ease-in-out infinite",
        "blob-float-slow": "blob-float 28s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "blob-float": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.06)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.96)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(139,92,246,0.45)",
        "glow-cyan": "0 0 60px -10px rgba(34,211,238,0.45)",
        card: "0 10px 40px -10px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
