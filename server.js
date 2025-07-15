const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();

app.use('/users', (req,res)=>{

});

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    
})
