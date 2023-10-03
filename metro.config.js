// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    blockList: [config.resolver.blockList, /\/amplify\/.*$/],
    sourceExts: [...config.resolver.sourceExts, "mjs"],
  }
}
