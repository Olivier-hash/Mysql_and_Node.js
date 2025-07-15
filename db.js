const { Sequelize } = require('sequelize');

// create connection with mysql2

// const conn = db.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'node_db'
// })


// create connection with sequalize

const dbconn = new Sequelize("node_db", "root","", {
    host:"localhost",
    dialect:"mysql"
})

const dbCheck = async () => {
    try {
        await dbconn.authenticate();
        console.log('db connected successfuly');
        
    } catch (error) {
        console.log('error', error);
        
    }
}

module.exports = dbonn;

