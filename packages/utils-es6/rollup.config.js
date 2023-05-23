import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    dir: "lib",
    format: "cjs",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};
