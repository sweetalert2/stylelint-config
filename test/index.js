import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import stylelint from 'stylelint'

const config = JSON.parse(fs.readFileSync('index.json'))

test('there should be no errors here', async () => {
  const output = await stylelint.lint({
    code: `$a: 1;\n
body {
  font-size: 1rem;
}

@import "~sweetalert2/src/sweetalert2";
`,
    config,
    customSyntax: 'postcss-scss'
  })
  assert.strictEqual(output.results[0].errored, false)
})

test('selector-type-case (stylelint-config-standard)', async () => {
  const output = await stylelint.lint({
    code: '.white { color: #ffffff }\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 1)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Expected "#ffffff" to be "#fff" (color-hex-length)')
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

test('declaration-property-value-no-unknown + declaration-block-single-line-max-declarations', async () => {
  const output = await stylelint.lint({
    code: 'a { max-width: auto; box-shadow: 0 0 0 $red; }\n',
    config,
  })
  assert.strictEqual(output.results[0].warnings.length, 2)
  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Expected no more than 1 declaration (declaration-block-single-line-max-declarations)')
  assert.strictEqual(output.results[0].warnings[1].text.trim(), 'Unexpected unknown value "auto" for property "max-width" (declaration-property-value-no-unknown)')
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
