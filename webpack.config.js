const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = () => {
    return {
        entry: './client/src/index.tsx',
        output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        },
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            compress: true,
            port: 3000,
            open: true
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
              {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'ts-loader',
                },
              },
              {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                },
              },          
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          plugins: [
            new HtmlWebpackPlugin({
              template: './public/index.html',
            }),
          ],
    }
}

module.exports = config