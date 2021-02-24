const util = require('util');

exports.add = function (params) {
	// console.warn(params);
	// console.log(util.inspect(params));
	return global.articles
		.insertOne({
			test: util.inspect(params),
		})
		.then(() => {
			console.log('文档插入成功');
			articles.find().toArray(function (err, result) {
				console.log(result);
			});
		})
		.catch((err) => {
			throw err;
		});
};
