import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierPlugin from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
      "prettier/prettier": ["error", { semi: true, singleQuote: false }],

      "no-var": "error", // avoid var
      "prefer-const": "error", // use const when not reassigned
      eqeqeq: ["error", "always"], // force === / !==
      curly: ["error", "all"], // require braces for if/else/loops
      "no-console": ["warn", { allow: ["warn", "error"] }], // keep logs controlled
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    ".vercel/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
