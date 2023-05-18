/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bb4ee0",

          "secondary": "#FB6E50",

          "accent": "#D9E8FF",

          "neutral": "#37233E",

          "base-100": "#E9EAF1",

          "info": "#688ECF",

          "success": "#52DAA4",

          "warning": "#EFB352",

          "error": "#F82420",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

