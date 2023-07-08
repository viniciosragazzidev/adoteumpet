/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "curious-blue": {
          50: "#f1f8fe",
          55: "#e5f1f2",
          100: "#e2f1fc",
          200: "#bee2f9",
          300: "#84caf5",
          400: "#43b0ed",
          500: "#1b98e0",
          600: "#0d76bc",
          700: "#0c5e98",
          800: "#0e517e",
          900: "#124468",
          950: "#0c2b45",
        },
      },
      padding: {
        p_page_l: "130px",
        p_page_m: "120px",
        p_page_s: "24px",
      },
      fontSize: {
        sm: "0.805rem",
      },
    },
  },
  plugins: [],
};
