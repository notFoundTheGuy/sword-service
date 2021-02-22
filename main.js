var fs = require('fs');

fs.readFile('README.md', function (err, res) {
    console.warn(res.toString())
});

// console.log(data.toString());