const Sequelize = require('sequelize')
const db = require('../db')
const { STRING, ARRAY } = require('sequelize');


const Class = db.define('class', {
    lead:{
        type:STRING
    }
});

module.exports = Class