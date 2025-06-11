const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,             // Podpira JS in JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',        // Uporabi Babel za React kodo
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],         // Omogoči uvoz brez končnic
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'usersApp',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersModule': './src/UsersModule.jsx', // Pot do komponente
      },
      shared: {
  react: {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies.react,
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies['react-dom'],
  },
},



    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
