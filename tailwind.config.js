/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (keep for non-landing pages)
        primary: "#6106eb",
        secondary: "#000000",

        // Dark landing v2 tokens
        ink: "var(--v2-bg)",
        surface: "var(--v2-surface)",
        surface2: "var(--v2-surface-2)",
        hairline: "var(--v2-border-subtle)",
        accent: "var(--v2-accent)",
        mint: "var(--v2-accent-2)",
        foreground: "var(--v2-text)",
        muted: "var(--v2-text-muted)",
        dim: "var(--v2-text-dim)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'card-v2': '0 20px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(124,92,252,0.18)',
        'glow-accent': '0 0 36px rgba(124,92,252,0.45)',
        'glow-mint': '0 0 32px rgba(0,229,196,0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.3s infinite',
        'float-more-delayed': 'float 6s ease-in-out 2.6s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'data-sweep': 'dataSweep 6s linear infinite',
        'orbit': 'orbit 60s linear infinite',
        'orbit-reverse': 'orbitReverse 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        dataSweep: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
