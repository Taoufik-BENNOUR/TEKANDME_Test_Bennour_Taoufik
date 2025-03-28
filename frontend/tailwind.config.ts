import { Bubblegum_Sans } from 'next/font/google';
import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        xs: '360px',
      },
    },
    extend: {
      colors: {
        primary:"#c5a59f",
        blue: {
          100: '#dae3ef',
          200: '#0c8ce9',
        },
        pink: {
          100: '#f3ebea',
        },
        green: {
          100: '#5d9966',
        },
        dark: {
          100: '#63615e',
        },
        orange: {
          100: '#F0D0A9',
        },
        red:{
          100:'#f87676'
        }
      },
    },
  },
} satisfies Config;

export default config;