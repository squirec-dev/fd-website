module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('cssnano'),
        require('postcss-for'),
        require('postcss-functions')({
            functions: {
                percentage: function (numerator, denominator) {
                    return `${(numerator / denominator) * 100}%`;
                }
            }
        }),
    ]
} 