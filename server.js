const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const dbconn = require('./config/db')

const userRoutes = require('./Routes/users')

app.use(express.json());
app.use('/users', userRoutes);

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`🚀 Server running at http://localhost:${port}`);
    
})
