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
      fontFamily: {
        inter: "Inter",
      },
    },
    colors: {
      White: "#FFFFFF", // White
      "Mauve-12": "#1A1523", // Mauve/Light/12
      "Mauve-11": "#6F6E77", // Mauve/Light/11
      "Mauve-10": "#86848D", // Mauve/Light/10
      "Mauve-09": "#908E96", // Mauve/Light/9
      "Mauve-08": "#C8C7CB", // Mauve/Light/8
      "Mauve-07": "#DCDBDD", // Mauve/Light/7
      "Mauve-06": "#E4E2E4", // Mauve/Light/6
      "Mauve-02": "#F9F8F9", // Mauve/Light/2
      "Mauve-01": "#FDFCFD", // Mauve/Light/1
      "Mauve-alpha-11": "#020010", // Mauve/Light Alpha/11
      "Mauve-alpha-10": "#040013", // Mauve/Light Alpha/10
      "Tomato-12": "#E54D2E", // Tomato/Light/12
      "Tomato-11": "#CA3214", // Tomato/Light/11
      "Tomato-09": "#E54D2E", // Tomato/Light/9
      "Tomato-07": "#F3B0A2", // Tomato/Light/7
      "Blue-alpha-11": "#0066DB", // Blue/Light Alpha/11
      "Blue-light-10": "#0081F1", // Blue/Light/10
    },
    fontSize: {
      fs10: "10px",
      fs12: "12px",
      fs14: "14px",
      fs16: "16px",
      fs20: "20px",
      fs22: "22px",
      fs24: "24px",
      fs28: "28px",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
