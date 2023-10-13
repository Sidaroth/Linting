module.exports = {
    overrides: [
        {
            // Typescript files will be validated with the typescript-eslint parser. It does not handle .vue constructs well.
            files: ['*.ts'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.json',
            },
            extends: ['airbnb-typescript/base'],
            rules: {
                'no-undef': 'off', // TypeScript does this internally, and does this significantly better than eslint.
                // note you must disable the base rule as it can report incorrect errors (especially for .d.ts)
                "no-unused-vars": "off",
                '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
                // note you must disable the base rule as it can report incorrect errors
                "indent": "off",
                "@typescript-eslint/indent": ["error", 4], // .ts uses 4 spaces.
            }
        },
    ]
};