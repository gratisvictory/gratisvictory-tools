# npm
```sh
npm install -D @gratisvictory/eslint
```
# yarn
```sh
yarn add -D @gratisvictory/eslint
```
# pnpm
```sh
pnpm add -D @gratisvictory/eslint 
```
# configuration file
```js
// .eslintrc.cjs
const { eslint } = require('@gratisvictory/eslint')

options: node | react | next

module.exports = eslint.[options]

```

# script
```json
{
  "scripts": {
    "lint": "eslint . --ext ts --ext tsx"
  }
}