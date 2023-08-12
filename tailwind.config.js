// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        scudBlue: "#0333FF",
        scudRed: "#FF2D2D",
        textColor: "#55575F",
        scudGreen: "#00AB4C",
        scudLightBlue: "#F2F5FF",
        scudDarkMode: "#060914",
      },
     
    },
  },

  plugins: [],
};
