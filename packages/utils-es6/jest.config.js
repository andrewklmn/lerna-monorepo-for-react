module.exports = {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
};
