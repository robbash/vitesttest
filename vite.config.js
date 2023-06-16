import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
  },
  alias: {
    src: path.resolve(__dirname, "src"),
    tests: path.resolve(__dirname, "tests"),
  },
});
