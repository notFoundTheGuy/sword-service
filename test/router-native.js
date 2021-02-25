const articles = require('./db/articles');
const directory = require('./db/directory');
function route(pathName, params, res) {
	switch (pathName) {
		case '/article/add':
			articles.add(params).then(() => {
                res.write('添加成功！');
                res.end();
            });
            break;

        case '/directory/add':
            directory.add(params).then(() => {
                res.write('添加成功！');
                res.end();
            });
            break;

        case '/directory/get':
            directory.get().then(result => {
                console.log(result);
                res.write(result);
                res.end();
            });
			break;

		default:
			break;
	}
	console.log(pathName);
}

exports.route = route;
