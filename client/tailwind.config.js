/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode via class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "Roboto", "sans-serif"],
        heading: ["Playfair Display", "Merriweather", "serif"],
        code: ["Fira Code", "JetBrains Mono", "monospace"],
      },
      colors: {
        light: {
          bg: "#F9FAFB", // background
          text: "#111827", // primary text
          secondary: "#4B5563", // secondary text
          card: "#F3F4F6", // card background
          border: "#E5E7EB", // borders
        },
        dark: {
          bg: "#121212",
          text: "#F9FAFB",
          secondary: "#9CA3AF",
          card: "#1A1A1A",
          border: "#374151",
        },
        accent: {
          DEFAULT: "#2563EB", // accent (links/buttons)
          dark: "#3B82F6", // accent in dark mode
          hover: "#1D4ED8", // light mode hover
          active: "#1E40AF", // light mode active
          dark: "#3B82F6", // dark mode default
          darkHover: "#2563EB", // dark mode hover
          darkActive: "#1D4ED8",
        },
      },
    },
  },
  plugins: [],
};
