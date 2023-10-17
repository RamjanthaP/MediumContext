import type { Config } from 'tailwindcss'
import  {gray } from 'tailwindcss/colors'

import plugin from 'tailwindcss/plugin'
const config: Config = {
  darkMode: 'class', // Trigger darkmode by class, until we got things in place
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {pattern: /^[wh]-(24|32|44)$/},
    {pattern: /^bg-(white|black|gray|primary|secondary)(-[1-9]0+)?$/}
  ],
  theme: {
    colors: {
      black: '#1C1C1C',
      white: '#FFFFFF',
      primary: {
        50: '#E5F9E8',
        100: '#C1E8C7',
        200: '#9CD7A6',
        300: '#76C684',
        400: '#51B463',
        500: '#2BA341',
        600: '#20832C',
        700: '#155C21',
        800: '#0A3616',
        900: '#00100A',
      },
      secondary: {
        50: '#FFFFFF',
        100: '#F5F5F5',
        200: '#E0E0E0',
        300: '#BDBDBD',
        400: '#9E9E9E',
        500: '#7E7E7E',
        600: '#616161',
        700: '#424242',
        800: '#2C2C2C',
        900: '#121212',
      },
      transparent: 'transparent',
      'btn-green': '#2FAB09',
      'btn-white': '#FFFFFF',
      'btn-black': '#1C1C1C',
    },
    fontFamily: {
      heading: ['var(--lotaGrotesqueAlt2-font)'],
      body: ['Poppins', 'sans-serif']
    },
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1.6' }],
      base: ['1rem', { lineHeight: '1.6' }],
      lg: ['1.125rem', { lineHeight: '1.6' }],
      xlg: ['1.5rem', { lineHeight: '1.6' }],
      xxl: '4.6vw',
      btn: '0.75vw'     
    },
    fontWeight: {
      normal: '400',
      bold: '600'
    },
    lineHeight: {
      btn: '24px'
    },
    letterSpacing: {
      btn: '-0.01em'
    },
    textAlign: {
      btn: 'left'
    },
    extend: {
      ringWidth: {
        3: '.1875rem'
      },
      outlineWidth: {
        3: '.1875rem'
      },
      outlineOffset: {
        6: '.375rem'
      },
      spacing: {
        'artical-img': '430px'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [plugin(function(utils) {
    utils.addVariant('hocus', ['&:hover', '&:focus'])
  })],
}
export default config
