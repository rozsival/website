const eslint = 'eslint --cache --fix';

module.exports = {
  './**/*.js': eslint,
  './**/*.{ts,tsx}': [() => 'tsc --project tsconfig.json', eslint],
  './**/*.{css,json,md,yml}': 'prettier --write',
};
