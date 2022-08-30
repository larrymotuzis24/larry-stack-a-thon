const Sequelize = require('sequelize')
const db = require('../db')
const { STRING } = require('sequelize');

const PlayerProfile = db.define('playerProfile', {
    firstName: {
        type:STRING,
        allowNull:false
    },
    lastName: {
        type:STRING,
        allowNull:false
    },
    emergencyContact:{
        type:STRING,
        allowNull:false
    },
    emergencyContactPhone: {
        type:STRING,
        allowNull:false
    }
});

module.exports = PlayerProfile;