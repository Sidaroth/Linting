import jsLint from '@eslint/js';

const config = [
    {
        rules: {
            ...jsLint.configs.recommended.rules,
            'prefer-destructuring': [
                'warn',
                {
                    VariableDeclarator: {
                        array: false,
                        object: true,
                    },
                    AssignmentExpression: {
                        array: true,
                        object: true,
                    },
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
            'no-mixed-operators': ['error', { allowSamePrecedence: true, }],
            
            // We do not care about linebreaks for linting to be consistent across OSes. Git will handle this for us with autocrlf and .gitattributes anyway.
            'linebreak-style': 'off',
            
            'max-len': [1, 160, 2, { ignoreComments: true }],
            'no-param-reassign': ['warn', { props: false }], // Due to object composition we need to be able to adjust props.
        },
    },
];

export default config;