module.exports = {
	entry : __dirname + "/app/main.js",
	output : {
		path : __dirname + "/public/",
		filename : "bundle.js"
	},
	devServer : {
		contentBase : __dirname + "/public",
		historyApiFallback: true, //不跳转
		inline : true
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader'
			},
			{
				test : /\.css$/,
				loader : 'style-loader!css-loader?modules'
			},
			{
				test : /\.(jpg|jpeg)/,
				loader : 'url-loader?limit=8192'
			}
		]
	}
}