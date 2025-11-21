import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--prose-body": theme("colors.gray[800]"),
            "--prose-headings": theme("colors.gray[900]"),
            "--prose-lead": theme("colors.gray[700]"),
            "--prose-links": theme("colors.blue[600]"),
            "--prose-bold": theme("colors.gray[900]"),
            "--prose-counters": theme("colors.gray[600]"),
            "--prose-bullets": theme("colors.gray[400]"),
            "--prose-hr": theme("colors.gray[200]"),
            "--prose-quotes": theme("colors.gray[900]"),
            "--prose-quote-borders": theme("colors.gray[200]"),
            "--prose-captions": theme("colors.gray[700]"),
            "--prose-code": theme("colors.gray[900]"),
            "--prose-pre-code": theme("colors.gray[100]"),
            "--prose-pre-bg": theme("colors.gray[900]"),
            "--prose-th-borders": theme("colors.gray[300]"),
            "--prose-td-borders": theme("colors.gray[200]"),
            "--prose-invert-body": theme("colors.gray[200]"),
            "--prose-invert-headings": theme("colors.white"),
            "--prose-invert-lead": theme("colors.gray[300]"),
            "--prose-invert-links": theme("colors.white"),
            "--prose-invert-bold": theme("colors.white"),
            "--prose-invert-counters": theme("colors.gray[400]"),
            "--prose-invert-bullets": theme("colors.gray[600]"),
            "--prose-invert-hr": theme("colors.gray[700]"),
            "--prose-invert-quotes": theme("colors.gray[100]"),
            "--prose-invert-quote-borders": theme("colors.gray[700]"),
            "--prose-invert-captions": theme("colors.gray[400]"),
            "--prose-invert-code": theme("colors.white"),
            "--prose-invert-pre-code": theme("colors.gray[300]"),
            "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--prose-invert-th-borders": theme("colors.gray[600]"),
            "--prose-invert-td-borders": theme("colors.gray[700]"),
            img: {
              width: "100%",
              borderRadius: theme("borderRadius.lg"),
            },
            iframe: {
              width: "100%",
              borderRadius: theme("borderRadius.lg"),
            },
            h1: {
              fontWeight: "700",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            h2: {
              fontWeight: "700",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            h3: {
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            p: {
              lineHeight: "1.75",
            },
            a: {
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            blockquote: {
              fontStyle: "italic",
              borderLeftWidth: "0.25rem",
              paddingLeft: theme("spacing.4"),
            },
          },
        },
        lg: {
          css: {
            p: {
              // marginBottom: theme('spacing.8'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
