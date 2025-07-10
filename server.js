const express = require('express');
const app = express();
const dotenv = process.dotenv.config()


app.use('/users', (req,res)=>{

});


app.listen(PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    
})
