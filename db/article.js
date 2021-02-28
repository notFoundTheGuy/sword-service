const ObjectId = require('mongodb').ObjectId;

exports.add = function (params) {
	return global.article
		.insertOne({
			title: params.title,
			content: params.content,
			dir_id: params.dir_id,
		})
		.catch((err) => {
			throw err;
		});
};

exports.del = function (params) {
	return global.article.deleteOne({ _id: ObjectId(params.id) }).catch((err) => {
		throw err;
	});
};

exports.get = function (params) {
	return global.article
		.findOne({
			_id: ObjectId(params.id),
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			throw err;
		});
};

exports.findByDirId = function (dirId) {
	return global.article
		.find({
			dir_id: dirId + '',
		})
		.toArray()
		.then((result) => {
			return result;
		})
		.catch((err) => {
			throw err;
		});
};
