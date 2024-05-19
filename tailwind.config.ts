import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollShow: {
          "0%": { opacity: "0", transform: "translateY(8%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        scrollHide: {
          "0%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "0", transform: "translateY(8%)" },
        },
      },
      animation: {
        scrollShow: "scrollShow 0.75s ease-out forwards",
        scrollHide: "scrollHide 0.75s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
