/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/wallpaper1.jpg')",
        'hero-pattern1': "url('./assets/wallpaper2.jpg')",
        'hero-pattern2': "url('./assets/wallpaper4.jpg')",
        'hero-pattern3': "url('./assets/hero.png')",
        'change1' : "change1"
      },
      animation: {
        'change1': 'changeBackground 15s infinite',
      },
      keyframes: {
        changeBackground: {
          '0%': { backgroundImage: 'url("./assets/wallpaper1.jpg")' },
          '33.33%': { backgroundImage: 'url("./assets/wallpaper2.jpg")' },
          '66.66%': { backgroundImage:'url("./assets/wallpaper3.jpg")' },
          '100%': { backgroundImage: 'url("./assets/wallpaper4.jpg")' },
        },
      },
    }
  },
  plugins: [
    flowbite.plugin(),
    require('tailwindcss-animated'),
  ],
}
