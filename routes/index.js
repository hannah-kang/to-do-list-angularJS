var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
//router.get('/', function(req, res) {
 // res.render('index', { title: 'Express' });
//});

// var string someName
// var int someNumber
// var int[] intArray
// var in

// "The time is " + someTime


router.get('/', function (req, res) {
	console.log(path.resolve(__dirname, '..', 'public'))
 res.sendfile(path.join(path.resolve(__dirname, '..', 'public'), 'app.html'));
});



module.exports = router;
