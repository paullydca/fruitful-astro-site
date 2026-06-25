/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#157A4E",
          hover: "#1E9B64",
          light: "#E8F5EE",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        forest: {
          DEFAULT: "#157A4E",
          hover: "#1E9B64",
          light: "#E8F5EE",
          dark: "#022A1C",
        },
        sage: {
          DEFAULT: "#A8C5B5",
          light: "#F0F7F3",
        },
        body: "#444444",
        charcoal: "#2D2D2D",
        mutedText: "#666666",
        lightGray: "#888888",
        borderGray: "#D9D9D9",
        borderLight: "#E5E5E5",
        bgGray: "#F5F5F5",
        offWhite: "#FAFAFA",
        terracotta: {
          DEFAULT: "#C17A5F",
          light: "#F5E6E0",
        },
        lavender: {
          DEFAULT: "#9B8EC4",
          light: "#EDEAF5",
        },
        skyBlue: {
          DEFAULT: "#7BAFCE",
          light: "#E8F1F7",
        },
        dustyRose: {
          DEFAULT: "#C78B8B",
          light: "#F5E8E8",
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        card: "16px",
        pill: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12)",
        button: "0 2px 8px rgba(21,122,78,0.25)",
        dropdown: "0 12px 48px rgba(0,0,0,0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        bounce: "bounce 1.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
