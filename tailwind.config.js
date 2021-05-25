module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "men-home":
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/bg-home-men.png')",
        "girl-home":
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/bg-home-girl.png')"
      })
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        DEFAULT: "#696969",
        50: "#DCDCDC",
        100: "#CFCFCF",
        200: "#B5B5B5",
        300: "#9C9C9C",
        400: "#838383",
        500: "#696969",
        600: "#4F4F4F",
        700: "#363636",
        800: "#1C1C1C",
        900: "#030303"
      },
      white: {
        DEFAULT: "#FDFDFD",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FDFDFD",
        600: "#E4E4E4",
        700: "#CACACA",
        800: "#B1B1B1",
        900: "#979797"
      },
      tundora: {
        DEFAULT: "#444444",
        50: "#B7B7B7",
        100: "#AAAAAA",
        200: "#919191",
        300: "#777777",
        400: "#5E5E5E",
        500: "#444444",
        600: "#2B2B2B",
        700: "#111111",
        800: "#000000",
        900: "#000000"
      },
      bridal: {
        DEFAULT: "#FFFCF6",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FFFCF6",
        600: "#FFEBC3",
        700: "#FFDA90",
        800: "#FFC95D",
        900: "#FFB82A"
      },
      dawn: {
        DEFAULT: "#F6F1EB",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F6F1EB",
        600: "#E6D8C8",
        700: "#D6C0A5",
        800: "#C7A781",
        900: "#B78F5E"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
