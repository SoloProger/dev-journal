const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@utils": path.resolve(__dirname, "src/shared/utils"),
      "@ui": path.resolve(__dirname, "src/shared/ui"),
      "@store": path.resolve(__dirname, "src/shared/store"),
      "@api": path.resolve(__dirname, "src/shared/api"),
    },
  },
};
