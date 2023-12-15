# npm
```sh
npm install -D @gratisvictory/prettier
```
# yarn
```sh
yarn add -D @gratisvictory/prettier
```
# pnpm
```sh
pnpm add -D @gratisvictory/prettier 
```
# configuration file
```js
// .prettier.cjs
const { prettier } = require('@gratisvictory/prettier')

module.exports = prettier

```
# .prettierignore
```bash
# unix
cp node_modules/@gratisvictory/prettier/.prettierignore .prettierignore

# windows
copy node_modules/@gratisvictory/prettier/.prettierignore .prettierignore
```
# script
```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx}\""
  }
}