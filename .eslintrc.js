module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    'linebreak-style': [0, 'error', 'windows'],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 代码缩进为2个空格
    indent: [1, 2, { SwitchCase: 1 }],
    // 要求 switch 语句中必须有 default 分支，或者有 // no default 注释
    'default-case': 2,
    // 禁止switch的case语句不break、return等结尾，若有意为之，请添加 // no break 类似注释语句
    'no-fallthrough': [2, { commentPattern: 'no[\\s\\w]*break' }],
    // 不允许使用带标签的break，continue等语句
    'no-labels': 2,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [2, 'never'],
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [2, 'allow-null'],
    quotes: ['error', 'single']
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
