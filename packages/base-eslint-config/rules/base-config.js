import jsLint from '@eslint/js';
import oxlint from 'eslint-plugin-oxlint';

export default [
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
            
            // https://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/
            'max-len': [1, 160, 2, { ignoreComments: true }],
            'no-param-reassign': ['warn', { props: false }], // Due to object composition we need to be able to adjust props.
        },
    },
    oxlint.configs['flat/recommended'], // oxlint should be the last one
];
