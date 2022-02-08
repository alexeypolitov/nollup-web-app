import node_resolve from "@rollup/plugin-node-resolve";
import static_files from "rollup-plugin-static-files";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

let config = {
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    entryFileNames: "[name].[hash].js",
    assetFileNames: "[name].[hash][extname]",
  },
  plugins: [typescript(), node_resolve()],
};

if (process.env.NODE_ENV === "production") {
  config.plugins = config.plugins.concat([
    static_files({
      include: ["./public"],
    }),
    terser(),
  ]);
}

export default config;
