let MongoClient = require('mongodb').MongoClient;
// let url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';
let url = 'mongodb://1.15.98.145:27027/?gssapiServiceName=mongodb';
let test = require('./directory');

exports.connect = function () {
	MongoClient.connect(
		url,
		{
			authSource: 'sword',
			auth: {
				user: 'lijian',
				password: 'yxz09231226',
			},
		},
		function (err, client) {
			if (err) throw err;
			console.log('数据库连接成功');
			global.dbSword = client.db('sword');
			global.article = dbSword.collection('article');
			global.directory = dbSword.collection('directory');
		}
	);
};
