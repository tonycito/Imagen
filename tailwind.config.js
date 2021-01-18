module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        98: '28rem',
        100: '36rem',
        102: '38rem',
        104: '40rem',
        106: '42rem',
        108: '44rem',
        110: '46rem',
        112: '48rem',
        114: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
