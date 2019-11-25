var express = require('express');
var router = express.Router();
var fs = require('fs');

// db setup
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rlarkgus',
//   database: 'dmc',
//   multipleStatements: true
// });
// connection.connect();


/* GET home page. */
router.get('/', function (req, res, next) {
  var jsonFile = fs.readFileSync('./public/files/papers.json')

  var obj = JSON.parse(jsonFile);
  var obj_length = Object.keys(obj.papers).length;

  console.log(obj.papers[0]);
  console.log(obj.papers[1]);
  console.log(obj_length)

  res.render('papers', { title: 'Distributed Mobile Computing', papers: obj, obj_length: obj_length});

  // var indexQuery = 'SELECT * FROM papers';
  // var indexAllPapers = connection.query(indexQuery, function (err, rows) {
  //   if (err) throw err;
  //   else {
  //     for(i in rows){
  //       console.log(rows[i]._id);
  //       console.log(rows[i].title);
  //       console.log(rows[i].author);
  //       console.log(rows[i].info);
  //       console.log("--------------");
  //     }
  //   }
  //   res.render('papers', { title: 'Distributed Mobile Computing', rows: rows});
  // });
});
module.exports = router;

