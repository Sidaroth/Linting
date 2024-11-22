import vueConfig from './rules/vue-config.js';
import globals from 'globals';
import oxlint from 'eslint-plugin-oxlint';
import vueLint from "eslint-plugin-vue";
import tsPlugin from '@typescript-eslint/eslint-plugin';

const config = [
    ...vueLint.configs['flat/recommended'],
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
    ...vueConfig,
    oxlint.configs['flat/recommended'], // oxlint should be the last one
];

export default config;
