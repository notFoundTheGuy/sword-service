const articles = require('./db/articles');
function route(pathName, params, res) {
	switch (pathName) {
		case '/article/add':
			articles.add(params).then(() => {
                res.write('添加成功！');
                res.end();
            });
			
			break;

		default:
			break;
	}
	console.log(pathName);
}

exports.route = route;
