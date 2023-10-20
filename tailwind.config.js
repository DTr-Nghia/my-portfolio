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
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
        'dark-gradient-input': 'linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
      },
    },
    screens: {
      'xl': '1439px',
      'lg': '1023px',
      'md': '767px',
      'sm': '480px',
      'xsm': '280px',
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#5b78f6',
      'white': '#ffffff',
      'dark': '#0F0F0F',
      'black': '#323232',
      'gray-100': '#F7F9FC',
      'gray-200': '#BCBCBC',
      'gray-300': '#949597',
      'gray-400': '#9f9f9f',
      'gray-600': '#676767',
    },
    keyframes: {
      "slide-in-top": {
        "0%": {
          transform: "translateY(-100px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
    }
  },
  plugins: [],
}

