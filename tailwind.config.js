/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",

        // Neutral
        darkGrayishMagenta: "hsl(303, 10%, 53%)",
        lightGrayishMagenta: "hsl(300, 24%, 96%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spartan: ["'League Spartan'", "sans-serif"],
      },
      fontSize: {
        base: "15px", // body copy
      },
    },
  },
  plugins: [],
};
