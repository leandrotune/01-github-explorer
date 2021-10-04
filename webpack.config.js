const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // executar o webpack no modo de desenvolvimento
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],

    }
};

// __dirname -- pegar o diretório que está o arquivo 