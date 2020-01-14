const app = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: __dirname + '/src',
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: __dirname + '/public/scripts/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
};

module.exports = [app];