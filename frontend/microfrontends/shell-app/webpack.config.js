const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 8081,
    static: {
      directory: path.join(__dirname, 'public'), // manifest.json and favicon.ico here
    },
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // <-- good, CSS support added
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        usersApp: 'usersApp@http://localhost:3001/remoteEntry.js',
        magazinesApp: 'magazinesApp@http://localhost:3002/remoteEntry.js',
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
