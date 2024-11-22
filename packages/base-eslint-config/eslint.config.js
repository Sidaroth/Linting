import baseConfig from './rules/base-config.js';
import jsConfig from './rules/js-config.js';
import globals from 'globals';
import oxlint from 'eslint-plugin-oxlint';

const config = [
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node },
        },
        ignores: ['node_modules/**/*']
    },
    ...baseConfig,
    ...jsConfig,
    oxlint.configs['flat/recommended'], // oxlint should be the last one
];

export default config;
