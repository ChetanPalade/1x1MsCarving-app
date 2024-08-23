const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'scheduler_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = connection;
