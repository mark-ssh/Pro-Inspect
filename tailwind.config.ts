import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans", sans-serif'],
    },
    extend: {
      animation: {
        "slow-scale": "scale 12s linear infinite",
        "clients-slide": "slide 35s linear infinite",
        "slide-down": "slidedown 200ms ease-in-out",
      },
      keyframes: {
        scale: {
          from: { transform: "scale(1.2)" },
          to: { transform: "scale(1)" },
        },
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slidedown: {
          from: { transform: "translateY(-20%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1"},
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
