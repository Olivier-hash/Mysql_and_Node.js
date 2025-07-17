const userModel = require('../models/userModel')
const dbconn = require('../config/db')



exports.createUSer = async (req,res) => {

  const {fullName,email,password} = req.body
  try {
    const user = await userModel.createUSer({fullName,email,password})
  } catch (error) {
    
  }
}