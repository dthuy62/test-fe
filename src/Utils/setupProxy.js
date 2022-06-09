
const {createProxyMiddleware} = require("http-proxy-middleware");


module.exports = function(app) {
	app.use(
		"/api/v2",
		createProxyMiddleware({
			target: "https://yts.torrentbay.to",
			changeOrigin: true,
		}),
	);
};
