var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    
    resolve: {
        extensions: ['.js', '.marko', '*.svg']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.svg$/, 
                loader: "svg-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?name=/static/fonts/[name].[ext]&limit=10&mimetype=application/font-woff"
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            }
            /*{
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
                include: __dirname + '/node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
            }*/
        ]
    },
    plugins: [
        // Write out CSS bundle to its own file:
        new ExtractTextPlugin('static/bundle.css', { allChunks: true })
    ]
};
