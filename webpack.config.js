const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack 中所有的配置信息都写在 module.exports 中进行导出
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件输出
    output: {
        // 指定打包文件的输出路径
        path: path.resolve(__dirname, 'dist'),
        // 指定打包文件的名
        filename: "bundle.js",

        // 告诉 webpack 不要使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    // module 用来指定 webpack 打包时要用到的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定规则生效的文件类型
                test: /\.ts$/,
                // 使用什么 loader
                use: [
                    // 配置 babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置 babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                // 有几个环境选型就写几个数组
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "87",
                                            "ie": "11"
                                        },
                                        // 指定 corejs 的版本
                                        "corejs": "3",
                                        // 使用 corejs 的方式（下面是按需加载）
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 排除的文件
                exclude: /node-modules/
            },
            // 设置对less处理
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入 postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    // 配置插件
    plugins: [
        // 让清除 dist 插件生效
        new CleanWebpackPlugin(),
        // 让插件在 webpack 中生效
        new HTMLWebpackPlugin({
            // 配置网页模板
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    // 告诉 webpack 哪些模块可以被编译
    resolve: {
        extensions: ['.ts', '.js']
    }
};