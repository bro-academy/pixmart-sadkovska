import html from "@html-eslint/eslint-plugin";

export default [
  {
    ...html.configs["flat/recommended"],
    files: ["src/**/*.njk"],
    rules: {
      "@html-eslint/use-baseline": ["error", {
        "available": "newly",
      }]
    }
  },
];
