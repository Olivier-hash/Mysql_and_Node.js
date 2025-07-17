const userModel = require('../models/userModel')
const dbconn = require('../config/db')



exports.createUser = async (req,res) => {

  const {fullName,email,password} = req.body
  try {
    const user = await userModel.create({fullName,email,password})
    res.json({message: "user created", user})
  } catch (error) {
    console.log('error ocurred', error);
    
  }
}