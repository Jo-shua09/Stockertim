/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-950": "#1B1464",
      },
      backgroundImage: {
        "auth-frame": "url('./src/assets/images/auth-frame.png')",
        ads: "url('./src/assets/images/ad-img.png')",
      },
    },
  },
  plugins: [],
};
