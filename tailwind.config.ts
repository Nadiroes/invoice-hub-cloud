
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#F8FAFC",
        },
        secondary: {
          DEFAULT: "#64748B",
          foreground: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#38BDF8",
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        success: {
          DEFAULT: "#22C55E",
          foreground: "#F8FAFC",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.6s ease-out",
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
