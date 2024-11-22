
import tsLint from 'typescript-eslint';

const config = [
    ...tsLint.configs.recommended,
    {
        // Typescript files will be validated with the typescript-eslint parser. It does not handle .vue constructs well.
        files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.json',
            },
        },
        rules: {
            'no-undef': 'off', // TypeScript does this internally, and does this significantly better than eslint.
            // note you must disable the base rule as it can report incorrect errors (especially for .d.ts)
            "no-unused-vars": "off",
            '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
            indent: ['error', 4, { "SwitchCase": 1 }],
        }
    },
];

export default config;
