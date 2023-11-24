const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        'buffer': path.resolve(__dirname, 'node_modules', 'buffer', 'index.js')
    }),
    addWebpackModuleRule({
        test: /\.md$/,
        use: 'raw-loader',
    })
);
