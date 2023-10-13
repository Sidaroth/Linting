const baseConfig = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        './rules/vue-config.js',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
};

module.exports = baseConfig;
