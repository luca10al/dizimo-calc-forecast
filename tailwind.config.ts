
import type { Config } from "tailwindcss";

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
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#9b87f5',
          hover: '#7E69AB',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#8E9196',
          foreground: '#FFFFFF'
        },
        neutral: {
          DEFAULT: '#C8C8C9',
          foreground: '#1A1A1A'
        },
        accent: {
          DEFAULT: '#F97316',
          foreground: '#FFFFFF'
        },
        kid: {
          blue: '#4A9DFF',
          purple: '#A34FDE',
          pink: '#FF6EC4',
          yellow: '#FFD639',
          green: '#5ED9A7',
          red: '#FF6B6B'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'bounce': 'bounce 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite'
      },
      fontFamily: {
        'rounded': ['Nunito', 'system-ui', 'sans-serif'],
        'comic': ['Comic Sans MS', 'Comic Sans', 'cursive']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
