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
        white_custom: "#E5F1F2",
        carolina_blue: "#1B98E0",
        carolina_blue_2: "#007bc1",

        celadon_blue: "#247BA0",
        sapphire_blue: "#006494",
        prussian_blue: "#13293D",
      },
      padding: {
        p_page_l: "160px",
        p_page_m: "120px",
        p_page_s: "24px",
      },
    },
  },
  plugins: [],
};
