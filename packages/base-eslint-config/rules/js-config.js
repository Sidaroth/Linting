module.exports = {
    overrides: [
        {
            files: ['*.js', '*.mjs', '*.cjs', '*.jsx'],
            rules: {
                // .js uses 4 spaces.
                indent: ['error', 4, { "SwitchCase": 1 }],
            },
        },
    ],
};