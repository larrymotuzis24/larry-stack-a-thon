const { INTEGER } = require('sequelize');
const { DATE } = require('sequelize');
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
        type:DATE
    },
    endType:{
        type:TIME
    },
    practiceDays:{
        type:STRING
    }
});


module.exports = ClassInfo;
