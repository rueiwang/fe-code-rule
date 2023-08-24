module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      },
      extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier']
    }
  ],
  rules: {}
}
