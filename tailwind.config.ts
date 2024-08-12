import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: '#DBDBDB',
      white: '#FFFFFF',
      braun: '#c1b199',
      deepBraun: '#BFA989',
      black: '#000000',
    },
  },
  plugins: [],
};
export default config;
