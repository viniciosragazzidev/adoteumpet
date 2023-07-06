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
        white_custom2: "#f7faff",
        white_custom: "#E5F1F2",
        carolina_blue: "#1B98E0",
        carolina_blue_2: "#007bc1",

        celadon_blue: "#247BA0",
        sapphire_blue: "#006494",
        prussian_blue: "#13293D",
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
