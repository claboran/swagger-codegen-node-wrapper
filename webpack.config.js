const path = require('path');

module.exports = {
    entry: './index.ts',
    target: "node",
    devtool: 'inline-source-map',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'swagger-codegen-node-wrapper.js'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },
}
