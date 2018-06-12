const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { injectBabelPlugin } = require('react-app-rewired');

const PATH = {
    app: path.join(__dirname, "app"),
    build: path.join(__dirname, "build")
}

const commonConfig = {
    entry: {
        app: path.join(PATH.app, "root.js")
    },
    output:{
        publicPath: '/',
        path: PATH.build,
        filename: '[name].js'
    },
    module: {
        loaders:[
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                //babel-loader  es6转成es5
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },{
                test: /\.mustache/,
                loader: 'mustache-loader'
            },{
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugin: ()=>([
                                require('autoprefixer')
                            ])
                        }
                    }
                ]
            },{
                test: /\.less?$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader?limit=5120&name=images/[name].[ext]'
            },{
                test: /\.mcss?$/,
                loader: 'style-loader!less-loader?modules=true'
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        title: "react study",
        template: path.join(PATH.app, "index.mustache")
    })]
}

const productConfig = Object.assign({}, commonConfig);

const devConfig =  Object.assign({
    devServer: {
        // historyApiFallback: true,
        inline: true
    }
}, commonConfig);


module.exports = (env) => {

    if (env == "dev") {

        config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], devConfig);

        return config;
    }

    return productConfig;
}