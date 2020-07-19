const stylelint = require('stylelint')
const test = require('bron')
const assert = require('assert').strict

const config = require('../index.js')

test('declaration-block-single-line-max-declarations (stylelint-config-standard)', async () => {
  const output = await stylelint.lint({
    code: 'a { top: 0; color: red; }\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 1)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Expected no more than 1 declaration (declaration-block-single-line-max-declarations)')
})

test('order/properties-order (stylelint-config-property-sort-order-smacss)', async () => {
  const output = await stylelint.lint({
    code:
      'a {\n' +
      '  color: red;\n' +
      '  top: 0;\n' +
      '}\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 1)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Expected "top" to come before "color" in group "box" (order/properties-order)')
})

test('csstree/validator (stylelint-csstree-validator)', async () => {
  const output = await stylelint.lint({
    code: 'a { max-width: auto; }\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 1)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Invalid value for `max-width` (csstree/validator)')
})

test('scss/no-duplicate-dollar-variables (stylelint-scss)', async () => {
  const output = await stylelint.lint({
    code: '$var: 0 !default;\n$var: 0 !default;\n',
    config,
  })

  assert.strictEqual(output.results[0].warnings.length, 1)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Unexpected duplicate dollar variable $var (scss/no-duplicate-dollar-variables)')
})

test('at-rule-no-unknown', async () => {
  const output = await stylelint.lint({
    code:
      '@mixin ie {\n' +
      '  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n' +
      '    @content;\n' +
      '  }\n' +
      '}\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 0)
})

test('number-leading-zero', async () => {
  const output = await stylelint.lint({
    code: '$margin: .1em;\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 0)
})
