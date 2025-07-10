const db = require('mysql2');

// create connection

const conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
})


conn.connect( err => {
    if (err) {
        console.log("Mysql connection failed");
        
    } else{
        console.log("Connected to Mysql");
        
    }
})

module.exports = conn;

