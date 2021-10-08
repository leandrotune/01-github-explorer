const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment? 'development' : 'production', // verificar se estou em processo de desenvolvimento ou produção
    devtool: isDevelopment ?'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),// entry: tradução entrada, arquivo inicial da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), // arquivo que vou gerar com webpack
        filename: 'bundle.js'
    }, 
    resolve: {
        extensions: ['.js', '.jsx'], // arquivos que podem se lidos (javascript e jsx)
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
          hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }

        ],

    }
};

// __dirname -- pegar o diretório que está o arquivo 