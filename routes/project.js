var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get test")
  res.render('project', { title: 'Distributed Mobile Computing' });
});

module.exports = router;
