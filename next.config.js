// next.config.js
module.exports = {
  future: {
    webpack5: true, // Ensure you are using Webpack 5 to support SWC
  },
  swcMinify: true, // Enable SWC for minification
  webpack(config) {
    config.module.rules.push({
      test: /\.(j|t)sx?$/,
      use: "swc-loader", // Use SWC for transpilation
      exclude: /node_modules/,
    });

    return config;
  },
};
