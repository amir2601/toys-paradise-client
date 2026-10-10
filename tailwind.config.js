/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Fredoka"', '"Plus Jakarta Sans"', "ui-sans-serif", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-1.5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(2deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shine: {
          "0%": { transform: "translateX(-130%) skewX(-18deg)" },
          "60%, 100%": { transform: "translateX(230%) skewX(-18deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "60%": { transform: "scale(1.04)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-6px) rotate(-4deg)" },
          "30%": { transform: "translateX(5px) rotate(3deg)" },
          "45%": { transform: "translateX(-4px) rotate(-2deg)" },
          "60%": { transform: "translateX(3px) rotate(1deg)" },
          "75%": { transform: "translateX(-2px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        shine: "shine 3.2s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "gradient-x": "gradient-x 10s ease infinite",
        "bounce-in": "bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        wobble: "wobble 0.9s ease-in-out both",
        "spin-slow": "spin-slow 24s linear infinite",
      },
      boxShadow: {
        soft: "0 18px 45px -20px rgba(76, 29, 149, 0.35)",
        card: "0 10px 30px -18px rgba(30, 41, 59, 0.35)",
        lift: "0 30px 60px -28px rgba(76, 29, 149, 0.45)",
        glow: "0 0 45px -10px rgba(124, 58, 237, 0.55)",
        "glow-amber": "0 0 45px -10px rgba(251, 191, 36, 0.55)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7C3AED",
          "primary-content": "#ffffff",

          "secondary": "#FB7185",
          "secondary-content": "#ffffff",

          "accent": "#FBBF24",
          "accent-content": "#422006",

          "neutral": "#1E293B",
          "neutral-content": "#F8FAFC",

          "base-100": "#ffffff",
          "base-200": "#F6F5FB",
          "base-300": "#E6E3F1",
          "base-content": "#3B3654",

          "info": "#38BDF8",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#FB7185",

          "rounded-box": "1.25rem",
          "rounded-btn": "0.85rem",
          "rounded-badge": "9999px",
          "animation-btn": "0.25s",
          "btn-focus-scale": "0.97",
          "border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
