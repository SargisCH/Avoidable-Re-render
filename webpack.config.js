module.exports = {
    entry: "./src/index.js",
    output:{
        path: '/src',
        filename: "bundle.js",
        publicPath: "dist"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader:"babel-loader",
                query:{
                    presets:[ "babel-preset-es2015", "babel-preset-stage-2", "babel-preset-react"]
                }, 
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', "css-loader"],
                exclude: /node_modules/
            }
        ]
    }
}