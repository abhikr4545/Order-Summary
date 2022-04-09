module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        unsaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)"
      },
      fontFamily: {
        "red-hat": "'Red Hat Display', sans-serif"
      },
      backgroundImage: {
        mobile: 'url(./images/pattern-background-mobile.svg)',
        desktop: 'url(./images/pattern-background-desktop.svg)'
      },
      backgroundSize: {
        "50": "50%"
      },
      width: {
        90: "21rem",
        para: "18rem"
      }
    },
  },
  plugins: [],
}