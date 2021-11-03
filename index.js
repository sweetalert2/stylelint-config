module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss",
  ],
  "plugins": [
    "stylelint-csstree-validator",
    "stylelint-order",
    "stylelint-scss"
  ],
  "ignoreFiles": [
    "**/*.js",
    "**/*.ts"
  ],
  "customSyntax": "postcss-scss",
  "rules": {
    "alpha-value-notation": null,
    "at-rule-no-unknown": null,
    "color-function-notation": null,
    "csstree/validator": true,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
    "scss/no-duplicate-dollar-variables": true,
    "value-keyword-case": null
  }
}
