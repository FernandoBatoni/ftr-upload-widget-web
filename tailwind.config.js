export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 2s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
    },
  },
  plugins: [],
};