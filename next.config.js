const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return [
            {
                source: '/:any*',
                destination: '/',
            },
        ];
    },
};