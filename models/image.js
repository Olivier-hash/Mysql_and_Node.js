
const {DataTypes} = require('sequelize');
const dbconn = require('../config/db')

const Image = dbconn.define('Image', {
    filename: {
        type: DataTypes.STRING,
        allownull: false        
    },
    filepath: {
        type: DataTypes.STRING,
        allownull: false
    }
})

module.exports = Image