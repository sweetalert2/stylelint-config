module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss",
  ],
  "plugins": [
    // "stylelint-csstree-validator",
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    // "csstree/validator": true,
    "declaration-empty-line-before": null,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "scss/no-duplicate-dollar-variables": true,
  }
}
