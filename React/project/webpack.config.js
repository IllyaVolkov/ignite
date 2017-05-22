var webpack = require('webpack');

module.exports = {
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: './build'
    },
    module: {
        loaders: [
            { test: /\.json?$/, loader: 'json-loader' },
			{
			    test: /\.jsx?$/,
			    loader: "babel-loader",
			    query:
				{
				    presets: ['es2015', 'react'],
				    plugins: ['transform-object-rest-spread']
				}
			}
        ]
    },
    plugins: [
		new webpack.optimize.UglifyJsPlugin({
		    debug: true,
		    minimize: true,
		    sourceMap: true,
		    output: {
		        comments: false
		    },
		    compressor: {
		        warnings: false
		    }
		})
    ]
}