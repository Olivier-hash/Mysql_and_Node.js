
const {createUser, getAllUsers} = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUser)
Router.get('/', getAllUsers)


module.exports = Router