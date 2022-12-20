/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['PT Sans Narrow'],
    },
    extend: {
      dropShadow: {
        'chunky': '-5px 5px 0 rgba(17, 95, 0, 0.15)',
        'chunkyhover': '-5px 5px 0 rgba(17, 95, 0, 0.25)',
      },
      colors: {
        'accent': '#115f00',
      }
    },
  },
  plugins: [],
}
