/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['"Red Hat Display"', 'sans-serif'], 
        merienda: ['"Merienda"', 'cursive'],
      },
      screens: {
        sm: { min: "350px", max: "767px" }, // Small devices
        md: { min: "768px", max: "1000px" }, // Medium devices
        lg: { min: "1001px", max: "2600px" }, // Large devices
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
