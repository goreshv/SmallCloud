/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DBFE',
          300: '#7CB9FD',
          400: '#3691FB',
          500: '#0066FF', // Signature SmallCloud electric azure
          600: '#0052CC',
          700: '#003E99',
          800: '#002B66',
          900: '#001833',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
          muted: '#F3F4F6',
          dark: '#000000', // True Pitch Black
          darker: '#000000',
          darkCard: '#0A0A0A',
          darkElevated: '#111111',
          darkBorder: '#1F1F1F',
        },
        text: {
          primary: '#111111',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
        border: {
          subtle: '#E5E7EB',
          medium: '#D1D5DB',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'dark-card': '0 0 0 1px #1F1F1F, 0 8px 24px -4px rgba(0, 0, 0, 0.8)',
        'dark-glow': '0 0 20px -5px rgba(0, 102, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
