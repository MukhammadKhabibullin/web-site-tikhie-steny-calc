/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jb: {
          bg: '#191a1c',
          card: '#232529',
          cardHover: '#2b2d31',
          border: '#393b40',
          borderLight: '#4e5157',
          accent: '#3574f0',
          accentHover: '#2963d6',
          purple: '#7b61ff',
          cyan: '#00c7d4',
          amber: '#f5a623',
          green: '#57c07b',
          muted: '#8c909a',
          text: '#dfe1e5',
        },
        jbLight: {
          bg: '#f7f8fa',
          card: '#ffffff',
          cardHover: '#f2f4f7',
          border: '#e3e5e8',
          borderLight: '#d2d5db',
          muted: '#6c707e',
          text: '#191a1c',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'jb-glow': '0 0 24px -4px rgba(53, 116, 240, 0.25)',
        'jb-glow-purple': '0 0 24px -4px rgba(123, 97, 255, 0.25)',
        'jb-window': '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'jb-window-light': '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
