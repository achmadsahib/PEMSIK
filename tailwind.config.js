/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",
          secondary: "#2563EB", 
          accent: "#9333EA",
        },
      },
    },
    plugins: [],
  };  