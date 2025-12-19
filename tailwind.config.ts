import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0C10',
          800: '#10131A',
          700: '#151A24'
        },
        neon: {
          pink: '#FF2ED1',
          cyan: '#00F5FF',
          lime: '#B6FF00',
          violet: '#7C3AED'
        }
      },
      boxShadow: {
        brutal: '8px 8px 0 0 rgba(0,0,0,0.85)',
        neon: '0 0 0 2px rgba(0,245,255,0.4), 0 0 40px rgba(255,46,209,0.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
