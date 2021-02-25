const ObjectId = require('mongodb').ObjectId;

exports.add = function (params) {
	return global.directory
		.insertOne({
			name: params.name,
		})
		.catch((err) => {
			throw err;
		});
};

exports.del = function (params) {
	let wherrStr = { _id: ObjectId(params.id) }
	return global.directory
		.deleteOne(wherrStr)
		.catch((err) => {
			throw err;
		});
};

exports.get = function () {
	return global.directory
		.find()
		.toArray()
		.then((result) => {
			return result;
		});
};
