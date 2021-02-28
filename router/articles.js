const express = require('express');
const router = new express.Router();

const article = require('../db/article');
const directory = require('../db/directory');
router.post('/article/add', function (req, res) {
	article.add(req.body).then((result) => {
		res.end(
			JSON.stringify({
				msg: '添加成功',
			})
		);
		// directory
		// 	.addChild({
		// 		dir_id: req.body.dir_id,
		// 		title: req.body.title,
		// 		id: result.insertedId,
		// 	})
		// 	.then(() => {
		// 		res.end(
		// 			JSON.stringify({
		// 				msg: '添加成功',
		// 			})
		// 		);
		// 	});
	});
});

router.get('/article/del', function (req, res) {
	article.del({
		id: req.query.id
	}).then(() => {
		res.end(JSON.stringify({
			msg: '删除成功～'
		}));
	});
});

router.get('/article/get', function (req, res) {
	article.get(req.query).then((result) => {
		res.end(JSON.stringify(result));
	});
});

module.exports = router;
