/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7a73ff',
        accent: '#ff914d',
        success: '#6ee7b7',
        'text-dark': '#2c2c34',
        'text-light': '#f8fafc',
        'background-light': '#f8fafc',
        'border-color': '#d1d5db',
        'card-background': '#ffffff',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
      },
      keyframes: {
        'confetti-fall': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0.7' },
        },
        'pulse-illustration': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'confetti-fall': 'confetti-fall 5s ease-out forwards',
        'pulse-illustration': 'pulse-illustration 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}