
const express = require('express');
const db = require('./db')


const app = express();


app.post('/users', (req,res) => {
    const {name, email} = req.body
    const sql = 'INSERT INTO users (name, email) VALUES (?,?)'
})