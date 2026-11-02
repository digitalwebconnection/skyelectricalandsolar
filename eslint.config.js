import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];

