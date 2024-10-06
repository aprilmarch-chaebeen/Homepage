const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.MODE,
  entry: './src/index.tsx',
  resolve: {
    // 번들링을 할 파일 설정
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    // loader 설정 - 등록한 로더의 뒤의 요소부터 번들링에 반영
    // node_modules 제외
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['esbuild-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[contenthash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
    usedExports: true,
    sideEffects: false,
    splitChunks: {
      name: "vendor",
      chunks: "all",
      minSize: 20000, // 최소 청크 크기 (20KB)
      maxSize: 50000,
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    // 번들한 css파일과 js파일을 html 파일에 link 태그, script태그로 추가
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // 환경 정보를 제공
    new webpack.EnvironmentPlugin(['MODE', 'PORT']),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin({
	    analyzerMode: "static",
	    generateStatsFile: true,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT,
    open: true,
    historyApiFallback: true,
    hot: true, // hot : 모듈의 변화된 부분만 서버에 자동으로 반영
  },
  devtool: 'eval-cheap-source-map',
};
