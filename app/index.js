const Koa = require("koa");
const convert = require("koa-convert");
const logger = require("koa-logger");
const cors = require("koa-cors");
const json = require("koa-json");
const koaBody = require("koa-body");
const fs = require("fs");
const https = require("https");
const enforceHttps = require("koa-sslify");

const app = new Koa();

// 日志
app.use(convert(logger()));

// JSON
app.use(convert(json()));

// 跨域
app.use(convert(cors()));

// 路由
app.use(koaBody());
const RouteAuto = require("./utils/router");
new RouteAuto(app, "./app/controllers").init();

// 错误信息，带添加
app.on("error", function (err, ctx) {
  console.log(err);
});

app.port = process.env.PORT || 3000;

var server = app.listen(app.port, function () {
  console.log("Express server listening on port " + server.address().port);
});

// var options = {
//   key: fs.readFileSync(
//     "/usr/local/nginx/conf/cert/4585413_together.0513.design.key"
//   ),
//   cert: fs.readFileSync(
//     "/usr/local/nginx/conf/cert/4585413_together.0513.design.pem"
//   ),
// };

// https.createServer(options, app.callback()).listen(process.env.PORT || 3000);
