const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")


const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
module.exports = {
    'mode': 'development',
    plugins: [
        htmlPlugin
    ],
    module: { //要打包的第三方模块
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
            //传递modules 参数,表名css文件需要按js打包方式打包导出
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[name]-[local]-[hash:8]', 'sass-loader']
            },
            {test: /\.woff2?|eot|ttf|otf|woff|svg$/, use: 'url-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}