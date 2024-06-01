// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roca: ["Roca Regular","serif"],
        nova: ["Proxima Nova Regular", "sans serif"],
        ping: ["PingFang SC", "sans serif"]
      },
    },
  },
  plugins: [],
};
