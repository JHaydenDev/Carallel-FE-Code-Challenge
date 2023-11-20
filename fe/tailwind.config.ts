import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-color": "#ffffff",
        "body-color": "#fffafa",
        "link-text": "#a3a39d",
        "link-text-selected": "#19724a",
        "filter-green": "#0e714a",
        "article-green": "#b7d7d6",
        "article-purple": "#e7d6de",
        "article-yellow": "#eeedc6",
        "article-orange": "#fad3bd",
        "sound-player-gray": "#f1f1f1",
        "button-orange": "#cf7f4f",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
