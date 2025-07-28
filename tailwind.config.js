/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // TodoMaster Design System - Modern Professional Theme
        brand: {
          50: "hsl(240 100% 98%)",
          100: "hsl(240 100% 95%)",
          200: "hsl(240 100% 90%)",
          300: "hsl(240 100% 83%)",
          400: "hsl(240 100% 73%)",
          500: "hsl(240 100% 63%)",
          600: "hsl(240 84% 53%)",
          700: "hsl(240 84% 43%)",
          800: "hsl(240 84% 33%)",
          900: "hsl(240 84% 23%)",
          950: "hsl(240 84% 13%)",
        },
        priority: {
          high: {
            DEFAULT: "hsl(0 72% 51%)",
            light: "hsl(0 72% 96%)",
            dark: "hsl(0 72% 41%)",
          },
          medium: {
            DEFAULT: "hsl(35 91% 51%)",
            light: "hsl(35 91% 96%)",
            dark: "hsl(35 91% 41%)",
          },
          low: {
            DEFAULT: "hsl(142 69% 45%)",
            light: "hsl(142 69% 96%)",
            dark: "hsl(142 69% 35%)",
          },
        },
        status: {
          overdue: "hsl(0 72% 51%)",
          today: "hsl(35 91% 51%)",
          upcoming: "hsl(217 91% 60%)",
          completed: "hsl(142 69% 45%)",
        },
        surface: {
          DEFAULT: "hsl(0 0% 100%)",
          secondary: "hsl(240 5% 98%)",
          tertiary: "hsl(240 5% 96%)",
          hover: "hsl(240 5% 94%)",
        },
        text: {
          primary: "hsl(240 10% 9%)",
          secondary: "hsl(240 5% 35%)",
          tertiary: "hsl(240 4% 46%)",
          inverse: "hsl(0 0% 100%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 12px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.25rem" }],
        "6xl": ["3.75rem", { lineHeight: "4rem" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)",
        "strong": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)",
        "glow": "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-brand": "0 0 20px rgba(99, 102, 241, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "bounce-subtle": "bounceSubtle 0.6s ease-in-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}
