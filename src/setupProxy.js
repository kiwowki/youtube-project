const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/youtube',                    // 클라이언트에서 호출할 경로
    createProxyMiddleware({
      target: 'https://www.googleapis.com',
      changeOrigin: true,
      pathRewrite: { '^/api/youtube': '/youtube/v3' },
    })
  );
};