
const userModel = require('../models/userModel');



exports.CreateUSer = async (req, res) =>{
    const {fullName, email, password} =req.body

  try {
      const user = await userModel.create({fullName,email,password})
      res.json({message:'user created sucessfully', user})
  } catch (error) {
      
  }
}