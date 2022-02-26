module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'origin-color': '#7ECA9C',
      },
      screens: {
        'tablet': {'max': '768px'},
        'phone': {'max': '550px'},
      },
    },
  },
  plugins: [],
}
