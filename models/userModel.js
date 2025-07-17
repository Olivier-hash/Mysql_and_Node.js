
const {DataTypes} = require('sequelize');   // sequelize
const dbconn = require('../config/db')


const Users = dbconn.define('users',{
    fullName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{len:[5]}
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{len:[8]}
    }
});


module.exports = Users