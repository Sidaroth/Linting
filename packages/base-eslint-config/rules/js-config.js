module.exports = {
    overrides: [
        {
            files: ['*.js'],
            rules: {
                // .js uses 4 spaces.
                indent: ['error', 4, { "SwitchCase": 1 }],
            },
        },
    ],
};