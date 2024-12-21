module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html",        // Includes the main HTML file
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/background.jpeg')", // Custom background image
      },
      colors: {
        primary: "#1e88e5", // Custom primary color (blue)
        secondary: "#d32f2f", // Custom secondary color (red)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family (example: Inter)
      },
      boxShadow: {
        glass: "0px 8px 32px rgba(0, 0, 0, 0.2)", // Custom shadow for glass effect
      },
      backdropBlur: {
        xs: "2px",
        sm: "5px",
        md: "10px",
        lg: "15px",
      },
    },
  },
  plugins: [],
};