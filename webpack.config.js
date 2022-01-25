const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: path.resolve(__dirname, './node_modules'),
            //     loader: 'babel-loader',
            //     options: { presets: ['env', 'react'] },
            // },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
          hash: true,
          minify: true,
      }),
        new MiniCssExtractPlugin({
            filename: 'main.css'  // а тут надо прописать имя css которое вы хотите
        })
    ],
      
      devServer: {
          static: {
              directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 9000,
      }
}