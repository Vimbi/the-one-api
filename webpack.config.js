const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  }
};

const esLintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['.tsx', '.ts', '.jsx', '.js'] })];

const uglifyJSPlugin = (isDev) => isDev ? [] : [new UglifyJSPlugin()];

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: develop ? '/' : '',
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-react', "@babel/preset-typescript",
              {
                plugins: ['@babel/plugin-transform-runtime']
              }
            ]
          }
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", { loader:'sass-loader',
        options: {
          sourceMap: true,
        }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ]
    }),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    ...esLintPlugin(develop),
    ...uglifyJSPlugin(develop),
  ],
  resolve: {
    extensions: ['.ts', '.tsx','.jsx', '.js'],
  },
  ...devServer(develop),
});