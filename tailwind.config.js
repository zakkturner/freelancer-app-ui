module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      main: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-teal": "#248387",
        "soft-orange": "#F4C384",
        "light-sand": "#F2E9DD",
      },
      boxShadow: {
        button:
          "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
