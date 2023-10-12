const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000,
    //     watchContentBase: true,
    //     progress: true
    // },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
        ]
    }
}