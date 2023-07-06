/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    content: {
      play: 'url("/play.png")',
      mountain: `url(/mountain.svg)`,
    },

    screens: {
      mobile: { max: '414px' },
      tablet: { max: '763px' },
      laptop: { max: '1160px' },
      desktop: '1440px',
    },
    extend: {
      fontFamily: {
        alt: 'var(--plus-jakarta-sans)',
      },

      colors: {
        blue: {
          200: '#F0F8FF',
          300: '#C8D4DD',
          700: '#007AF7',
          900: '#1C3C50',
        },
      },

      fontSize: {
        '7xl': '4.2rem',
      },

      spacing: {
        2: '0.3rem',
      },
    },
  },
  plugins: [],
}
