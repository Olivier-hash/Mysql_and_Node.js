const db = require('mysql2');

// create connection

const conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
})