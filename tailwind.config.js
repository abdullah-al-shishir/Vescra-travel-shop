/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Ensure this path is correct for your project
  ],
  theme: {
    extend: {
      fontFamily: {
        "edu-cursive": ['"Edu NSW ACT Cursive"', "cursive"],
      },
    },
  },
  plugins: [],
};
