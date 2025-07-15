const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const dbconn = require('./db')

app.use('/users', (req,res)=>{

});

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`🚀 Server running at http://localhost:${port}`);
    
})
