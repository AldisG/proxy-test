const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    proxy: {
      '/account-api': {
        target: 'https://quiz-app-usnl.onrender.com/',
        secure: false,
      },
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development Webpack'),
    }),
  ],
}