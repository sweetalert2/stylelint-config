const stylelint = require('stylelint')
const test = require('bron')
const assert = require('assert').strict

const config = require('../index.js')

test('stylelint configuration', async () => {
  const output = await stylelint.lint({
    code: "a { color: red; top: 0; }",
    config,
  })

  assert.strictEqual(output.results[0].warnings[0].text.trim(), 'Expected "top" to come before "color" (order/properties-order)')
  assert.strictEqual(output.results[0].warnings[1].text.trim(), 'Expected no more than 1 declaration (declaration-block-single-line-max-declarations)')
  assert.strictEqual(output.results[0].warnings[2].text.trim(), 'Unexpected missing end-of-source newline (no-missing-end-of-source-newline)')
})
