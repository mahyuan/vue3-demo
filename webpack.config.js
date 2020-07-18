
const webpack = require('webpack')
const path = require('path')
const ExtraTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        index: path.resolve('src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].boundle.js'
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' }, {loader: 'css-loader', options:{modules: true}},
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'vue', '.json'],
        alias: {
            '@': path.resolve('src')
        }
    },
    optimization: {
        minimize: true
    },
    plugins: [
new  ExtraTextPlugin({
    filename: 'style.min.css',
    allChunks: true
}),
new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
})

    ]

}
