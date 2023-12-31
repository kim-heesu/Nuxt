module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'some-other-config-you-ues',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
