/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a73e8",
          light: "#4285f4",
          dark: "#0d47a1"
        },
        secondary: {
          DEFAULT: "#D48E3C", // earthy orange
          light: "#F2A649",
          dark: "#B37431",
        },
        accent: {
          DEFAULT: "#4A90E2", // sky blue
          light: "#6BAFFF",
          dark: "#2A77D0",
        },
        natural: {
          dark: "#3A3A3A",
          medium: "#666666",
          light: "#F5F5F5",
          beige: "#F2EBE0",
          brown: "#8C6C47",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
}; 