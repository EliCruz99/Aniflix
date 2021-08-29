module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mainImage': "url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701401792.jpg)"
      }),
      colors: theme => ({
        palette: {
          'backgroundDark': "#221F1F",
          'backgroundLight': 'rgb(237,237,230)',
          'header': "#E50914",
          'font': "#9F9B96",
          'fontOnLight': "#221F1F",
          'lightCard': '#9F9B96',
          'darkCard': "#4E4644",
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}