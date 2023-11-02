import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,vue}', 'index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      default: 'Poppins, sans-serif',
      poppins: 'Poppins, sans-serif'
    },
    colors: {
      black: {
        700:  "#131316",
        900:  "#0F0F13",
      },
      white: '#ffffff',
      sage: {
        100: '#E5F2F4',
        200: '#84D7D7',
        300: '#4FC6C6',
        400: '#38AEAE',
        500: '#2D8C8C',
        600: '#2B8182',
        700: '#236D6D',
        800: '#1D5959',
        900: '#164545'
      },
      mint: {
        100: '#E5FAFA',
        200: '#AAF7D8',
        300: '#7CE8C5',
        400: '#58D2B5',
        500: '#45BEAA',
        600: '#149990',
        700: '#007B7C',
        800: '#005962',
        900: '#004150'
      },
      yellow: {
        600: '#FFDB0F',
        700: '#D8B700'
      },
      rhubarb: {
        100: '#FCE6E8',
        200: '#FAD5D9'
      },
      fig: {
        100: '#7AD0FF'
      },
      gray: {
        900: '#000000',
        800: '#141317',
        700: '#575665',
        600: '#8B8B9A',
        500: '#BFBDC8',
        400: '#E2E1E6',
        300: '#EBEBF1',
        200: '#F5F6FA',
        100: '#FAFAFA'
      },
      background: '#F5F6FA',
      error: {
        400: '#E84F51',
        500: '#D81B2F'
      },
      success: {
        500: '#008556'
      }
    },
  },
  plugins: []
};

export default config;