import type { Config } from 'tailwindcss'

import plugin from "tailwindcss/plugin";
const config: Config = {
  darkMode: "class", // Trigger darkmode by class, until we got things in place
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^[wh]-(24|32|44)$/ },
    { pattern: /^(dark:)?bg-(white|black|gray|primary|secondary)(-[1-9]0+)?$/ },
  ],
  theme: {
    colors: {
      black: "#1C1C1C",
      white: "#FFFFFF",
      primary: {
        50: "#E5F9E8",
        100: "#C1E8C7",
        200: "#9CD7A6",
        300: "#76C684",
        400: "#51B463",
        500: "#2BA341",
        600: "#20832C",
        700: "#155C21",
        800: "#0A3616",
        900: "#00100A",
      },
      secondary: {
        50: "#FFFFFF",
        100: "#F5F5F5",
        200: "#E0E0E0",
        300: "#BDBDBD",
        400: "#9E9E9E",
        500: "#7E7E7E",
        600: "#616161",
        700: "#424242",
        800: "#2C2C2C",
        900: "#121212",
      },
      transparent: "transparent",
      "btn-green": "#2FAB09",
      "btn-white": "#FFFFFF",
      "btn-black": "#1C1C1C",
    },
    fontFamily: {
      heading: ['var(--lotaGrotesqueAlt2-font)'],
      body: ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    letterSpacing: {
      normal: '-0.01em',
      small: '-0.012em',
      smaller: '-0.0125em',
      large: '-0.02em',
      btn: '-0.01em',
    },
    fontSize: {
      'xs': ['12px', { lineHeight: '1.5', letterSpacing: '-0.012em' }],
      'sm': ['14px', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
      'md': ['16px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      'lg': ['20px', { lineHeight: '1.3', letterSpacing: '-0.0125em' }],
      'xl': ['24px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      'xxl': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      '3xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],

      'Jumbo/sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      'Jumbo/lg': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      'Jumbo/xl': ['75px', { lineHeight: 'normal', letterSpacing: '-0.75px' }],

      // Additional sizes
      hero: '4.6vw',
      btn: '0.75vw',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      black: '900',
    },
    lineHeight: {
      btn: '24px',
    },
    textAlign: {
      btn: "left",
    },
    extend: {
      ringWidth: {
        3: ".1875rem",
      },
      outlineWidth: {
        3: ".1875rem",
      },
      outlineOffset: {
        6: ".375rem",
      },
      spacing: {
        "artical-img": "430px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      md: "668px",
      lg: "1024px",
      xl: "1408px",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1280px",
      },
    },
  },
  plugins: [
    plugin(function (utils) {
      utils.addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
export default config;
