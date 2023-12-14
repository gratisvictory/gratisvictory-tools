/** @type {import('prettier').Config} */
module.exports = {
    "$schema": "https://json.schemastore.org/prettierrc",
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 100,
    "tabWidth": 2,
    "quoteProps": "as-needed",
    "experimentalTernaries": true,
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "bracketSameLine": true,
    "endOfLine": "auto",
    "proseWrap": "always",
    "jsxSingleQuote": true,
    "parser": "typescript",
    "htmlWhitespaceSensitivity": "strict",
    "embeddedLanguageFormatting": 'auto',
    "plugins": [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-multiline-arrays",
        "prettier-plugin-tailwindcss"
    ],
    "multilineArraysWrapThreshold": 2,
    "importOrder": [
        "<BUILTIN_MODULES>",
        "^(react|next(.*))$",
        "<THIRD_PARTY_MODULES>",
        "<TYPES>",
        "",
        "^@/(.*)$",
        "^~/(.*)$",
        "^[./]",
        "<TYPES>^[.]",
        "^(.*)(sass|css|scss)$"
    ], 
    "importOrderParserPlugins": [
        "classProperties",
        "decorators-legacy",
        "jsx",
        "typescript"
    ]
};