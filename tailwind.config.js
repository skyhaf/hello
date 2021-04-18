module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#16B1F3',
        'secondary': '#0776A6',
        'yellow': '#E3CF16',
      },
      backgroundColor: theme => ({
        'primary': '#16B1F3',
        'secondary': '#0776A6',
        'yellow': '#E3CF16',
       })
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
