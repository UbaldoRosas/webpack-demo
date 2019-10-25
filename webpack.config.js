const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
    entry: {
		app : './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer : {
		contentBase : './dist'
	},
	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title : 'Output',
		})
	],
    output : {
		filename : '[name].[contenthash].js',
		chunkFilename: '[name].js',
        path : path.resolve(__dirname, 'dist')
	},
	optimization : {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks : {
			cacheGroups : {
				vendor : {
					test : /[\\/]node_modules[\\/]/,
					name : 'vendors',
					chunks : 'all'
				}
			}
		}
	}
}