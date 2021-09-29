module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [`prettier`],
  extends: [`plugin:vue/vue3-recommended`, `plugin:prettier/recommended`, `prettier`],
  parser: `vue-eslint-parser`,
  parserOptions: {
    parser: `babel-eslint`,
  },
  rules: {
    "prettier/prettier": [`error`],
    "vue/require-v-for-key": `error`,
    "vue/no-use-v-if-with-v-for": [
      `error`,
      {
        allowUsingIterationVar: false,
      },
    ],
    semi: [`error`, `always`],
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 999,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "no-console": 0,
    "vue/html-quotes": [
      `error`,
      `double`,
      {
        avoidEscape: true,
      },
    ],
    quotes: [
      `error`,
      `backtick`,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
