var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*
router.get('/', function (req, res) {
  var sql = 'SELECT * FROM CONTACT';
  db.query(sql, function (error, results, fields) {
    if (error) {
      console.log('error: ', error.message);
    } else {
      console.log(results)
      res.send(results);
    };

  });
});
*/