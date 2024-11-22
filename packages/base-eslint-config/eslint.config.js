import baseConfig from './rules/base-config.js';
import jsConfig from './rules/js-config.js';
import globals from 'globals';

export default [
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
];