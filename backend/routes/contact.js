var express = require('express');
var router = express.Router();
var lists = [];

var db = require('../mysql-db');
db.connect();

//list
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM CONTACT';
    db.query(sql, function (error, results, fields) {
        if (error) {
            console.log('error:', error);
        } else {
            //console.log('results:', results);
            res.send(results);
        };
    });
});

//select
router.get('/:uid', function (req, res, next) {
    var sql = 'SELECT * FROM CONTACT WHERE UID=?';
    var params = [req.params.uid];
    db.query(sql, params, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
});

//insert
router.post('/add', function (req, res) {
    var time = new Date(Date.now());
    var sql = 'INSERT INTO CONTACT(USER, COMPANY, ARTICLE, CATAGORY, DATE) VALUES (?,?,?,?,?)';
    var params = [req.body.USER, req.body.COMPANY, req.body.ARTICLE, req.body.CATAGORY, time];
    db.query(sql, params, function (error, results, fields) {
        if (error) {
            console.log('error:', error);
        } else {
            res.redirect('/api/contact');
        };
    });
});

//delete
router.get('/remove/:uid', function (req, res) {
    var sql = 'DELETE FROM CONTACT WHERE UID=?';
    var params = [req.params.uid];
    db.query(sql, params, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/api/contact');
            //console.log(results);
            //res.send(results);
        }
    });
});

module.exports = router;
