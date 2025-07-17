
const {createUser} = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUser)


module.exports = Router