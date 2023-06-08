/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "Mauve-12": "#1A1523", // Mauve/Light/12
      "Mauve-10": "#86848D", // Mauve/Light/10
      "Mauve-07": "#DCDBDD", // Mauve/Light/7
      "Mauve-01": "#FDFCFD", // Mauve/Light/1
      "Tomato-11": "#CA3214", // Tomato/Light/11
    },
    fontSize: {
      fs10: "10px",
      fs12: "12px",
      fs14: "14px",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
