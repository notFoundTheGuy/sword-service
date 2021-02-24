let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';

exports.connect = function () {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		console.log('数据库连接成功');
		global.dbSword = db.db('sword');
		global.articles = dbSword.collection('articles');
	});
};
