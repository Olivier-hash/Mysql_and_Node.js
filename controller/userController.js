const userModel = require('../models/userModel')
const dbconn = require('../config/db')


// create users
exports.createUser = async (req,res) => {

  const {fullName,email,password} = req.body
  try {
    const user = await userModel.create({fullName,email,password})
    res.json({message: "user created", user})
  } catch (error) {
    console.log('error ocurred', error);
    
  }
}

// Read all users
exports.getAllUsers = async (req,res) => {
  try {
    const users = await userModel.findAll();
    res.json({message:"List of all users ", users})
  } catch (error) {
    
  }
}

// Get user by ID
exports.getAllUsersById = async (req,res) => {
  try {
    const user = await userModel.findByPk(req.params.id)
    if(!user) return res.status(404).json({message: "User not Found"});
    res.json({message:"user identified by Id",user});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}