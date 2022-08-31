const { INTEGER } = require('sequelize');
const { TIME } = require('sequelize');
const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db')


const ClassInfo = db.define('classInfo', {
    className:{
        type:STRING
    },
    leadCoach:{
        type:INTEGER
    },
    startTime:{
        type:TIME
    },
    endType:{
        type:TIME
    },
    practiceDays:{
        type:STRING
    }
});


module.exports = ClassInfo;
