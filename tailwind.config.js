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
        doc: {
          bg: {
            light: '#ffffff',
            dark: '#0f0f11',
          },
          sidebar: {
            light: '#f7f7f9',
            dark: '#141416',
          },
          border: {
            light: '#e6e6ec',
            dark: '#242428',
          },
          hover: {
            light: '#ededf2',
            dark: '#1d1d22',
          },
          active: {
            light: '#e2e2ea',
            dark: '#26262c',
          },
          text: {
            light: '#121214',
            dark: '#ededf0',
            mutedLight: '#6c6c78',
            mutedDark: '#8f8f9e',
            subtleLight: '#9a9aa8',
            subtleDark: '#5e5e6c',
          }
        },
        background: {
          light: '#f8fafc',
          subtle: '#f1f5f9',
          card: '#ffffff'
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'glow': '0 0 35px -5px rgba(99, 102, 241, 0.18)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
