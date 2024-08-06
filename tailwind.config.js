/** @type {import('tailwindcss').Config} */ 
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
  screens: {
    'xl': { 'max': '1200px' },
    'lg': { 'max': '991px' },
    'md': { 'max': '767px' },
    'sm': { 'max': '550px' },
    'xsm': { 'max': '425px' },
  }
};
export const plugins = [];