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
          bg: '#0f0f11',
          lightBg: '#ffffff',
          sidebar: '#141416',
          lightSidebar: '#f8f9fa',
          surface: '#18181b',
          lightSurface: '#ffffff',
          border: '#27272a',
          lightBorder: '#e4e4e7',
          hover: '#222226',
          lightHover: '#f1f1f4',
          text: '#f4f4f5',
          lightText: '#09090b',
          muted: '#a1a1aa',
          lightMuted: '#52525b',
          accent: '#3b82f6',
          accentHover: '#2563eb',
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
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
