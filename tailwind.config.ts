import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cozy lo-fi palette from your original design
        bg: '#0e1211',           // deep charcoal for dark cozy base
        paper: '#121615',        // slightly lighter card bg
        ink: '#e8efe9',          // warm off-white text
        muted: '#a9b7ae',        // subtle secondary text
        teal: '#6ab8a8',         // soft teal accent
        peach: '#f0b7a4',        // warm peach accent
        yellow: '#f5e6a7',       // lo-fi sticky note yellow
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0,0,0,.35)',
      },
      borderRadius: {
        'custom': '18px',
      },
      animation: {
        'pulse': 'pulse 2.6s ease-in-out infinite',
        'blink': 'blink 1.2s steps(1,end) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
