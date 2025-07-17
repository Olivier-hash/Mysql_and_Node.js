
const {DataTypes} = require('sequelize');   // sequelize
const dbconn = require('../db')


const Users = dbconn.define('users',{
    fullname:{
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
})