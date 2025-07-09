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



// step 2: pracical task with connection and running of SELECT query

const query = 'SELECT * FROM users';

conn.query(query, (err, results)=>{
    if (err) {
        console.log('Query error',err.message);
        
    }else{
        console.log("User inserted successfully");
        results.forEach(user => {
            console.log(`${user.id}: ${user.name}: ${user.email}`);
            
            
        })
    }
})