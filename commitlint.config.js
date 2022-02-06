module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 200],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore']],
  },
}
