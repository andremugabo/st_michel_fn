/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#223B7D",
        customYellow: "#EDB235",
      },
    },
  },
  plugins: [],
};
