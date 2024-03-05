import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          orange: "#FF671D",
          gray: "#6F6F6F",
          "dark-gray": "#525252",
        },
        secondary: {
          bg: "#F8F8F8",
          border: "#F0F0F0",
          gray: "#D9D9D9",
        },
        error: {
          bg: "#FFF2F2",
          text: "#F04646",
        },
      },
    },
  },
  plugins: [],
};
export default config;
