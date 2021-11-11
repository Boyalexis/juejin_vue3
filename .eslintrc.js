module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'semi': ['error', 0], // 0 = off, 1 = warn, 2 = error,
    'eqeqeq': 'off', // 关闭===代替==的告警
    'default-case': 'off', // 关闭switch没有default的告警
    'array-callback-return': 'off', // 关闭数组函数没有return的告警
    'no-script-url': 'off', // 关闭a标签href无url的告警
    'jsx-a11y/anchor-is-valid': 'off', // 
    'jsx-a11y/anchor-has-content': 'off', // 关闭jsx a标签无内容的告警
    'linebreak-style': ['off', 'windows'],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
  },
};