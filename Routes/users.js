
const {createUser, getAllUsers, getUserById} = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUser)
Router.get('/', getAllUsers)
Router.get('/', getUserById)

module.exports = Router