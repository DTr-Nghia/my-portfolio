/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./assets/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./common/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl':'1439px',
      'lg':'1023px',
      'md':'767px',
      'sm':'480px',
      'xsm': '280px',
    },
    colors: {
      'primary': '#5b78f6',
      'white':'#ffffff',
      'black': '#323232',
      'gray-100': '#F7F9FC',
      'gray-300': '#949597',
      'gray-400':'#676767',
    }
  },
  plugins: [],
}

