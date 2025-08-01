
const {createUser, getAllUsers, getUserById, updateUser, deleteUser, register, getProfile, login} = require('../controller/userController')
const express = require('express')


const Router = express.Router();


Router.post('/', createUser);
Router.get('/', getAllUsers);
Router.get('/:id', getUserById);
Router.put('/:id', updateUser);
Router.delete('/:id', deleteUser);
Router.post('/register', register);
Router.post('/logni', login)
Router.get('/profile', getProfile)

module.exports = Router