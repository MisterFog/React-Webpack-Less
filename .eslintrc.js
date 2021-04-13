module.exports = {
  root: true,
    /* extends - предназначен для указания конфигурации, с помощью которой мы хотим расширить общую конфигурацию ESLint.*/
  extends: [
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  /* env - это свойство, которое определяет среды, в которых JavaScript должен работать.*/
  env: {
    "browser": true,
    "jasmine": true,
    "jest": true,
    "es6": true,
    "commonjs": true,
    "node": true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    // "semi": [1, "always"], // ["error", "never"]
    "quotes": [2, "single"],
    "camelcase": "off",
    "@typescript-eslint/camelcase": "off"
  },
  settings: {
    react: {
      "pragma": "React",
      "version": "latest", // "detect" automatically picks the version you have installed. ("detected")
    }
  },
  parser: "@typescript-eslint/parser",

  /**  */
  globals: {
    "window": true,
    "ActiveXObject": true
  },

  /** parserOptions - позволяет задать параметры языку JavaScript, которые мы хотим поддерживать.*/
  // parserOptions: {
  //   "ecmaVersion": 6
  // },
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
