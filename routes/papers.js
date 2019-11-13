var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  // var array = fs.readFileSync('./public/files/test.json').toString().split("\n");
  
  // for(i in array){
  //   console.log(array[i]);
  // }

  var jsonFile = fs.readFileSync('./public/files/test.json')
  var obj = JSON.parse(jsonFile);
  var obj_length = Object.keys(obj.papers).length;

  console.log(obj.papers[0]);
  console.log(obj.papers[1]);
  console.log(obj_length)

  res.render('papers', { title: 'Distributed Mobile Computing', papers: obj, obj_length: obj_length});
});


module.exports = router;

