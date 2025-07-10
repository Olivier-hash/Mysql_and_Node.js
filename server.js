const express = require('express');
const app = express();



app.use('/users', (req,res)=>{

});


app.listen(PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    
})
