let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';

MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	console.log('连接成功！！！！！');
	let dbSword = db.db('sword');
	// dbase.createCollection('site', function (err, res) {
	//     if (err) throw err;
	//     console.log('创建成功');
	// })

	// 插入：insertOne，inserMany
	// let obj = {
	// 	1: '这是一条测试数据',
	// 	test: 123,
	// 	aloow: 999,
	// };
	// dbSword.collection('site').insertOne(obj, function (err, res) {
	// 	if (err) throw err;
	//     console.log('文档插入成功');
	//     console.log(dbSword.collection('site').find());
	// });

	// 查 find,pretty
	// let whereStr = { test: 123 };
	// dbSword
	// 	.collection('site')
	// 	.find(whereStr)
	// 	.toArray(function (err, result) {
	// 		// 返回集合中所有数据
	// 		if (err) throw err;
	// 		console.log(result);
	// 		db.close();
	// 	});

	function findResult(whereStr) {
		dbSword
			.collection('site')
			.find(whereStr = {})
			.toArray(function (err, result) {
				// 返回集合中所有数据
				if (err) throw err;
				console.log(result);
				db.close();
			});
	}

	// 改 updateOne, updateMany
    let wherrStr = { test: 123 };
    
	// let updateStr = { $set: { aloow: 00000 } };
	// dbSword.collection('site').updateOne(wherrStr, updateStr, (err, res) => {
	// 	if (err) throw err;
    //     console.log('文档更新成功');
    //     findResult();
	// 	db.close();
    // });
    
    // 删 
    // dbSword.collection('site').deleteOne(wherrStr, (err, res) => {
	// 	if (err) throw err;
    //     console.log('删除成功');
    //     findResult();
	// 	db.close();
    // });

    // 排序 { type: 1 }  // 按 type 字段升序
    // { type: -1 } // 按 type 字段降序
    let sortStr = { aloow: 1 };
    dbSword.collection('site').find().sort(sortStr).toArray((err, res) => {
		if (err) throw err;
        // findResult();
        console.log(res);
		db.close();
    });
});
