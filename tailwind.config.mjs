/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-200%)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  function ({ addUtilities }) {
    const newUtilities = {
      ".scrollbar-hidden": {
        scrollbarWidth: "0",
        "-msOverflowStyle": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  },
};
