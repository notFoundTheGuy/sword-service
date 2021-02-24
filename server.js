const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

const db = require('./db/index')
exports.start = function (route) {
	function onRequest(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

		let pathname = url.parse(req.url).pathname;

        console.log(req.method);
        if (req.method === 'POST') {
            // post请求解析
            let postParams = '';
        
            // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            req.on('data', function(chunk){    
                postParams += chunk;
            });
        
            // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            req.on('end', function(){
                postParams = querystring.parse(postParams);
                route(pathname, postParams, res);
            });
        } else {
             // 解析 url 参数,get请求
            let getParams = url.parse(req.url, true).query;
            route(pathname, getParams, res);
        }
	}

	http.createServer(onRequest).listen(9999);
    // 连接数据库
    db.connect();
	console.log('Server running!!!!!');
};
