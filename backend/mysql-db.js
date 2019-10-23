var mysql = require('mysql');
var connection = mysql.createConnection({
    /*host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'dltkdxo',
    database: 'board'*/
    host: '59.4.223.150',
    post: 3306,
    user: 'ihms',
    password: 'ihms',
    database: 'ihms'//'test'
});

module.exports = connection;