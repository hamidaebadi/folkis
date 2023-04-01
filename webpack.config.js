const path = require('path')

const config = () => {
    return {
        entry: './client/src/index.tsx',
        output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'main.js'
        },
        devServer: {
            static: path.resolve(__dirname, './public/build'),
            compress: true,
            port: 3000,
            open: true
        },
        devtool: 'source-map',
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
    }
}

module.exports = config