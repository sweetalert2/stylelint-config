# stylelint shareable config for the SweetAlert2 SCSS coding style

SCSS linting rules, this extends the basic stylelint rules for use with [SweetAlert2](https://github.com/sweetalert2/sweetalert2)'s projects.

---
## Installation

```sh
yarn add @sweetalert2/stylelint-config
```


---

## .stylelintrc

```js
{
  "extends": "@sweetalert2/stylelint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

---

## example package.json script

```json
"scripts": {
  "lint:scss": "stylelint **/*.scss --cache",
}
```

which would allow you to lint your project via `yarn lint:scss`
