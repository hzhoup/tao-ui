module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/vue'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  }
}
