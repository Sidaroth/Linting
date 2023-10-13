module.exports = {
    rules: {
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

        // https://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/
        'max-len': [1, 160, 2, { ignoreComments: true }],
        'no-param-reassign': ['warn', { props: false }], // Due to object composition we need to be able to adjust props.
    },
};