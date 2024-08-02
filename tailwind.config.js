/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1500px',
      'lg': '1500px',
    },
    extend: {
      colors: {
        "hca-accent-1": "#0a2240",
        "hca-accent-2": "#f9c285",
        "hca-accent-3": "#063d7a",
        "hca-link-active": "#1e71cd",
        "hca-alert-light": "#f8dade",
        "hca-alert-light-border": "#efc1c1",
        "hca-alert-dark": "#df2500"
      },
    },
  },
  plugins: [],
}