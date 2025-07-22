
const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUser);
Router.get('/', getAllUsers);
Router.get('/:id', getUserById);
Router.put('/:id', updateUser);
Router.delete('/:id', deleteUser)

module.exports = Router