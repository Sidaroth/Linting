const baseConfig = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        './rules/ts-config.js',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
};

module.exports = baseConfig;
