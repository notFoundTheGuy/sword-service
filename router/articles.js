const express = require('express');
const router = new express.Router();

router.post('/articles/add', function (req, res) {
	console.log(req.body);
	console.log(req.route);
	// 输出 JSON 格式
	// var response = {
	// 	first_name: req.body.first_name,
	// 	last_name: req.body.last_name,
	// };
	// console.log(response);
	// res.end(JSON.stringify(response));
});

module.exports = router;