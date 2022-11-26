/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "felt-pattern": "url('/public/felt2.jpeg')",
      },
      colors: {
        "card-red": "rgb(230, 0, 8)",
      },
      width: {
        card: "256px",
      },
      height: {
        card: "358.4px",
      },
    },
  },
  plugins: [],
};
