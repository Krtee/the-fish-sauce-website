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
        primary: "#FFB802",
        secondary: "#EC4E20",
        tertiary: "#7E9F8F",
        "fish-green": "#122E27",
        "fish-beige": "#EFE8D6",
        "fish-brown": "#382616",
      },
      width: {
        "6/5": "120%",
        "5/6": "83.3333%",
      },
      height: {
        "6/5": "120%",
        "5/6": "83.3333%",
      },
    },
  },
  plugins: [],
};
export default config;
