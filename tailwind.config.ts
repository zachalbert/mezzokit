import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
      },
      rotate: {
        "5": "5deg",
        "10": "10deg",
        "15": "15deg",
        "20": "20deg",
        "30": "30deg",
        "60": "60deg",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
