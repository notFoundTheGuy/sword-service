const ObjectId = require('mongodb').ObjectId;
const article = require('./article');
exports.add = function (params) {
	return global.directory
		.insertOne({
			name: params.name,
		})
		.catch((err) => {
			throw err;
		});
};

// exports.addChild = function (params) {
// 	let where = { _id: ObjectId(params.dir_id) };
// 	return global.directory.updateOne(where, {
// 		$push: {
// 			children: {
// 				name: params.title,
// 				id: params.id,
// 			},
// 		},
// 	});
// };

exports.del = function (params) {
	let where = { _id: ObjectId(params.id) };
	return global.directory.deleteOne(where).catch((err) => {
		throw err;
	});
};

exports.get = function () {
	return new Promise((resolve, reject) => {
		global.directory
			.find()
			.toArray()
			.then((result) => {
				// todo：改造成await
				Promise.all(
					result.map((item) => {
						return article.findByDirId(item._id).then((curArticles) => {
							item.children = curArticles.map((_item) => ({
								name: _item.title,
								id: _item._id,
							}));
						});
					})
				).then(() => {
					resolve(result);
				});
			});
	});
};
