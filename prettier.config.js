module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 4,
      },
    },
  ],
}
