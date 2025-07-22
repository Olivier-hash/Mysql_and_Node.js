// sequlize is the ORM : object Relational Mapping tool for Node.js 
// is a tool that allows you to interact with relational database like
//{MYSQL, PostgreSQ, }


const { Sequelize } = require('sequelize');

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
dbCheck();

module.exports = dbconn;

