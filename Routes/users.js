
const { createUSer } = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUSer)


module.exports = Router