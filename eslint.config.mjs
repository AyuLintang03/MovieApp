import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier" // Added
  ],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: globals.browser,
      extends: [
        pluginJs.configs.recommended,
        "plugin:react/recommended", // Ensure React recommended settings are included
        "standard-with-typescript", // Ensure TypeScript settings are included
        "prettier" // Ensure Prettier settings are included
      ]
    }
  ]
};
