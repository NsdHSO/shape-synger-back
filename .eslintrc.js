module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "array-element-newline": [
      "error",
      {
        "ArrayExpression": "consistent",
        "ArrayPattern": {
          "minItems": 3
        }
      }
    ],
    "no-console": "error",
    "no-debugger": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        "groups": [
          "external",
          "internal",
          [
            "parent",
            "sibling",
            "index"
          ],
          "builtin"
        ],
        "pathGroups": [
          {
            "pattern": "@angular/**",
            "group": "external"
          },
          {
            "pattern": "(rxjs|rxjs/**)",
            "group": "external"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "type",
          "object"
        ]
      }
    ],
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
};
