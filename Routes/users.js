
const {createUser, getAllUsers, getUserById, updateUser, deleteUser, register, getProfile, login} = require('../controller/userController')
const express = require('express')
const uploads = require('../middlewares/upload');
const upload = require('../middlewares/upload');


const Router = express.Router();


Router.post('/', createUser);
Router.get('/', getAllUsers);
Router.get('/:id', getUserById);
Router.put('/:id', updateUser);
Router.delete('/:id', deleteUser);
Router.post('/register', register);
Router.post('/login', login)
Router.get('/profile', getProfile)

//Routes for File uploads
Router.get('/files', (req,res)=>{
    res.render('upload-Form') // HTML Form
} )
Router.post('/uploads', upload.single('image'), (req,res) =>{
    console.log(req.file); /// info about file uploaded
    res.json({
        message: "File uploaded successfully",
        file: req.file
    })
})


module.exports = Router