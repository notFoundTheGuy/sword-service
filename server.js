var http = require('http');
var url = require('url');
var querystring = require('querystring');
var util = require('util');

// var express = require('express');
// var app = express();

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     console.log(req.url)
//     next();
// });


// app.use('/', index);
// app.listen(9999);

// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     response.end('Hello World\n');
// }).listen(9999);

exports.start = function (route) {
	function onRequest(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
		// let pathname = url.parse(req.url).pathname;
        // route(pathname);
        
		// res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('11111');


        // 解析 url 参数,get请求
        // var params = url.parse(req.url, true).query;
        // res.write(params);
        // res.end();

        // post请求解析
        // 定义了一个post变量，用于暂存请求体的信息
        var post = '';     
    
        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function(chunk){    
            post += chunk;
        });
    
        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function(){    
            post = querystring.parse(post);
            console.log(post)
            console.log(util.inspect(post))
            res.end(util.inspect(post));
        });

		
	}

	http.createServer(onRequest).listen(9999);
	console.log('Server running!!!!!');
};
