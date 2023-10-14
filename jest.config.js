/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@aws-sdk/.+|uuid)",
  ],
  setupFilesAfterEnv: ["./setup-jest.ts"],
};
