module.exports = {
    overrides: [
        {
            files: ['*.js'],
            rules: {
                // Vue files indent 2 spaces, .js and .ts uses 4 spaces.
                indent: ['error', 4, { "SwitchCase": 1 }],
            },
        },
    ],
};