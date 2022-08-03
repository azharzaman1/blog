/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light theme palette
        primary: "#ec4884",
        "primary-light": "#f06196",
        "primary-dark": "#e23173",

        text: "#1e293b",
        "text-dim": "#475569",
        "text-dim-2": "#475569",
        "text-info": "#94a3b8",

        background: "#f8fafc",
        "surface-1": "#f1f5f9",
        "surface-2": "#fafafa",
      },
      fontSize: {
        xs: "11px",
        sm: "13px",
        base: "15px",
        md: "18px",
        lg: "20px",
      },
    },
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1367px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      body: ["Inter", "Roboto", "sans-serif"],
      "heading-1": ["Inter", "Roboto", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],

      "open-sans": ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      charter: ["Charter", "sans-serif"],
      "charter-bold": ["Charter Bold", "sans-serif"],
      "charter-italic": ["Charter Italic", "sans-serif"],
    },
  },
  plugins: [],
};
