const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),// entry: tradução entrada, arquivo inicial da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), // arquivo que vou gerar com webpack
        filename: 'bundle.js'
    }, 
    resolve: {
        extensions: ['.js', '.jsx'], // arquivos que podem se lidos (javascript e jsx)
    },
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