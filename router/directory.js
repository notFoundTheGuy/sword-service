const express = require('express');
const router = new express.Router();

const directory = require('../db/directory');

router.post('/directory/add', function (req, res) {
	directory.add({
		name: req.body.name
	}).then(() => {
		res.end('添加成功');
	});
});

router.get('/directory/del', function (req, res) {
	directory.del({
		id: req.query.id
	}).then(() => {
		res.end(JSON.stringify({
			msg: '删除成功～'
		}));
	});
});

router.get('/directory/get', function (req, res) {
	directory.get().then(result => {
		res.end(JSON.stringify(result));
	});
});

module.exports = router;