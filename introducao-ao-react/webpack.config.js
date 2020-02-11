const path = required('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    /**
     * output: Defines where babel will save the translated code
     */
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        /**
         * For each type of file, what the webpack will use.
         * Seted ruled: Every time Babel found a JS it will
         * transpile him.
         * Don't transpile .JS in node_modules
         */
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}