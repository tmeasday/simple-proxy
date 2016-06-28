var httpProxy = require('http-proxy');
var express = require('express');

app = express();

var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3000'
});
app.use(function(req, res) {
  console.log('proxying', req.path);
  proxy.web(req, res);
})

app.listen(4000);
