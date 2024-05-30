const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,        
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    devServer: {
        hot: true,
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                },                                 
            }
        ]
    }
}