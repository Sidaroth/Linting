module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            extends: [
                'plugin:vue/vue3-recommended',
                '@vue/eslint-config-typescript',
            ],
            rules: {
                // Disable the 'no-undef' rule, which is handled by TypeScript
                'no-undef': 'off',

                // Enforce a maximum number of attributes per line in Vue templates except for ignored tags
                'vue/max-attributes-per-line': ['error', { singleline: { max: 5, }, }],

                // Enforce consistent line breaks in single-line HTML elements
                'vue/singleline-html-element-content-newline': ['error', {
                    ignoreWhenNoAttributes: true,
                    ignoreWhenEmpty: true,
                    ignores: ['span', 'tr', 'td', 'ul', 'li', 'a', 'p'],
                }],

                // Enforce PascalCase for component names in single-file components
                'vue/component-name-in-template-casing': ['error', 'PascalCase', {
                    registeredComponentsOnly: false,
                    ignores: ['/^font-awesome-icon/'],
                }],

                // Disable the base 'no-unused-vars' rule and use the TypeScript version instead
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': "props" }],

                // Enforce file extensions for imports, except for .ts files
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        ts: 'never',
                    },
                ],
            },
        },
    ],
};