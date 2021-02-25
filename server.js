const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db/index');
const articlesRouter = require('./router/articles');
const directoryRouter = require('./router/directory');

// 允许跨域
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

//对JSON请求体解析中间件
app.use(bodyParser.json());
//对urlencoded请求体解析中间件,extended:true 高级模式 false:普通
app.use(bodyParser.urlencoded({ extended: true }));
app.use(articlesRouter);
app.use(directoryRouter);


exports.start = function () {
	app.listen(9999, function () {
		console.log('Server running!!!!!');
		// 连接数据库
		db.connect();
	});
};
