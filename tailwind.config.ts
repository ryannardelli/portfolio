import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "serif"],
        sen: ["Sen", "serif"],
      },
      colors: {
        colorPrimary: "#4E35F2",
        colorSecondary: "#1D8FF2",
        assets: "#F2F2F2"
      }
    },
  },
  plugins: [],
} satisfies Config;
