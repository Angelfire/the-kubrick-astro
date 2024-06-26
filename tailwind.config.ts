import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      md: '760px',
      lg: '760px',
      xl: '760px',
      '2xl': '760px',
    },
    colors: {
      'blue-french': '#06c',
      'blue-malibu': '#5ea5e3',
      'blue-maritime': '#147',
      'blue-warmspring': '#3974ae',
      'gray-carbon': '#333',
      'gray-colossus': '#979797',
      'gray-lucky': '#777',
      'gray-placebo': '#e3e3e3',
      'gray-platinum': '#dfdfdf',
      'white': '#fff',
    },
    fontFamily: {
      trebuchet: ['Trebuchet MS', 'Lucida Grande', 'Verdana', 'Arial', 'Sans-Serif'],
      lucida: ['Lucida Grande', 'Verdana', 'Arial', 'Sans-Serif'],
      arial: ['Arial', 'Helvetica', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

export default config
