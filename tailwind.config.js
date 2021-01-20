module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'audio-black': '#232129'
      },
      fontFamily: {
        'audiocore': ["ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
