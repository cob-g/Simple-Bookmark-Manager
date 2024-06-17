/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "Purple": "#526DF0",
        "Red": "#FA5959",
        "Blue": "#242A45",
        "Grey": "#9194A2",
        "White": "#f7f7f7",
      },
    },
    fontFamily: {
       Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  plugins: [],
}


// https://www.youtube.com/watch?v=00gyCtIQp8E&t=456s