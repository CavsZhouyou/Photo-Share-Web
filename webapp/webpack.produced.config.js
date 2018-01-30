/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片分享网站前端webpack配置文件
 * @Date: 2017-12-18 19:49:52 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-23 12:00:06
 * **************************************************************************************
 * 本文件仅适用于最终文件发布 ，最终生成的打包文件输出在./dist目录下，你可以根据自己的需求自行设置
 * 开始开发
 * 1.npm install 下载依赖组件
 * 2.npm run dev 启动 webpack-dev-sever
 * 3.npm run produced 生成发布的文件
 * **************************************************************************************
 * 注意：
 * 1.请确保你安装了node.js
 * 2.入口尚未配置
 * 3.后端代理未配置
 * 4.现在文件配置适用于基本开发，后期开发中如需引入相关插件需要修改部分配置代码
 * 5.后期开发中如需引入界面，只需对特定的页面文件引入和进行HtmlWebpackPlugin配置即可
 */

const path = require("path");
const webpack = require("webpack");
const proxy = require("http-proxy-middleware"); //代理模块
const CleanwebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html生成模组
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //css打包模组
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css额外压缩模组-基于ExtractTextPlugin的增量模组

module.exports = {
    entry: {
        index: "./src/index/index.js",
        photoClass: "./src/photoClass/photoClass.js",
        photoDetails: "./src/photoDetails/pohotoDetails.js",
        userManage: "./src/userManage/manageIndex/manageIndex.js",
        photoCheck: "./src/userManage/photoCheck/photoCheck.js",
        photoLook: "./src/userManage/photoLook/photoLook.js",
        photoUpload: "./src/userManage/photoUpLoad/photoUpload.js",
        personalInfo: "./src/userManage/personalInfo/personalInfo.js",
        changePassword: "./src/userManage/changePassword/changePassword.js",
        userManageCombine: "./src/userManageCombine/userManageCombine.js",
        modernizr: "./src/js/modernizr-2.6.2.min.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2015", "env"]
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract({
                    fallback: ["style-loader"],
                    use: ["css-loader", "postcss-loader"],
                    publicPath: "../"
                })
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract({
                    fallback: ["style-loader"],
                    use: ["css-loader", "sass-loader", "postcss-loader"],
                    publicPath: "../"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url-loader?limit=8192&name=img/[name].[ext]"
            },
            {
                test: /\.woff$/,
                loader:
                    "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.ttf$/,
                loader:
                    "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader:
                    "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
            },
            {
                test: /\.html$/,
                loader: "html-withimg-loader"
            }
        ]
    },

    plugins: [
        // 自动补全css属性中的浏览器前缀
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [
                        require("autoprefixer")({
                            browsers: ["ie>=8", ">1% in CN"]
                        })
                    ];
                }
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        //提取jquery插件
        new webpack.optimize.CommonsChunkPlugin({
            name: ["module_bind"],
            filename: "js/[name].js",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("css/[name].css"), //打包css文件
        new CleanwebpackPlugin(["dist"]), //更新前清理dist目录

        //代码压缩
        // new OptimizeCssAssetsPlugin({
        //     cssProcessorOptions: {
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: false
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false
        //     }
        // }),

        new HtmlWebpackPlugin({
            showErrors: false,
            template: "src/index/index.html", //网页原型
            filename: "./index.html", // 首页
            chunks: ["modernizr", "index", "module_bind"]
            //favicon: "src/img/favicon.ico"
        }),

        new HtmlWebpackPlugin({
            showErrors: false,
            template: "src/photoClass/photoClass.html", //网页原型
            filename: "./photoClass.html", // 图片分类页面
            chunks: ["modernizr", "photoClass", "module_bind"]
            //favicon: "src/img/favicon.ico"
        }),

        new HtmlWebpackPlugin({
            showErrors: false,
            template: "./src/photoDetails/photoDetails.html",
            filename: "./photoDetails.html", //单张图片浏览页面
            chunks: ["modernizr", "photoDetails", "module_bind"]
        }),

        new HtmlWebpackPlugin({
            showErrors: false,
            template: "./src/userManage/manageIndex/manageIndex.html",
            filename: "./userManage.html",
            chunks: ["modernizr", "userManage", "module_bind"]
        }),

        new HtmlWebpackPlugin({
            showErrors: false,
            template: "./src/userManageCombine/userManageCombine.html",
            filename: "./userManageCombine.html",
            chunks: ["modernizr", "userManageCombine", "module_bind"]
        })
    ]
};
