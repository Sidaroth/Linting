const baseConfig = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        './rules/base-config.js',
        './rules/js-config.js',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
};

module.exports = baseConfig;
