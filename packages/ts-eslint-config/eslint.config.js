import tsConfig from './rules/ts-config.js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';

const config = [
    {
         languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        ignores: ['node_modules/**/*'],
    },
   ...tsConfig,
    oxlint.configs['flat/recommended'], // oxlint should be the last one
];

export default config;
