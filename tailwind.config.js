/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTHeme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        // SE por somente o open sans iriamos deletar todas
        // as fonts que o tailwind disponibiliza
        // para nao ocorrer esse erro usamos o exemplo
        // a seguir onde pegamos todas as fontes dentro do
        // defaultTheme
        sans: ["Open Sans", ...defaultTHeme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1 ": "#dadce0",
        "brand-blue-1 ": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
