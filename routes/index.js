var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
//router.get('/', function(req, res) {
 // res.render('index', { title: 'Express' });
//});

router.get('/', function (req, res) {
	console.log(path.resolve(__dirname, '..', 'public'))
 res.sendfile(path.join(path.resolve(__dirname, '..', 'public'), 'app.html'));
});

module.exports = router;
