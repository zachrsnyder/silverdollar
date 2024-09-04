import { text } from "cheerio";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['wireframe']
  },
  theme: {
    extend: {
      backgroundImage:
      {
        'foh' : "url(/images/foh.jpg)",
      },
      //setting screen sizes to add conditional styling. Had to modify from the default to work with some of the styling.
      screens: {
        'sm': '500px',
        'md' : '804px',
        'lg' : '1210px',
      },
      gridAutoRows: {
        'fixed' : '250px',
      },
      gridAutoColumns: {
        'fixed' : '250px',
        'text' : 'minmax(250px, 1fr)',
      },
      gridTemplateColumns: {
        'sm' : 'repeat(1, minmax(250px, 250px))',
        'md' : 'repeat(auto-fit, minmax(125px, 1fr))',
      },
      gridTemplateRows: {
        'sm': 'repeat(auto-fit, minmax(250px, 1fr)',
      },
      colors: {
        primary: '#fff7ed',
        secondary: '#1a2e05',
        text: '#000000',
      },
    }
  }
};
export default config;
