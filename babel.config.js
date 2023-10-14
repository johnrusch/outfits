module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-typescript",
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-react",
    ],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "transform-es2015-modules-commonjs",
    ],
  };
};
