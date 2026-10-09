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
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
      boxShadow: {
        soft: "0 18px 45px -20px rgba(76, 29, 149, 0.35)",
        card: "0 10px 30px -18px rgba(30, 41, 59, 0.35)",
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
