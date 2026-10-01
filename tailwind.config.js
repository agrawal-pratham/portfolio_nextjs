/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "240px",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      colors: {
        slateBg: "var(--bg-main)",
        slateCard: "var(--bg-surface)",
        slateText: "var(--text-primary)",
        slateMuted: "var(--text-secondary)",
        signalPrimary: "var(--accent-primary)",
        signalSecondary: "var(--accent-secondary)",
      },
    },
  },
  plugins: [],
};
