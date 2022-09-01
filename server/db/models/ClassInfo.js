const { INTEGER } = require('sequelize');
const { DATE } = require('sequelize');
const { TEXT } = require('sequelize');
const { TIME } = require('sequelize');
const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = require('../db');


const ClassInfo = db.define('classInfo', {
    classTitle:{
        type:STRING
    },
    leadCoach:{
        type:INTEGER
    },
    start:{
        type:TIME
    },
    end:{
        type:TIME
    },
    date:{
        type:DATE
    },
    practiceDays:{
        type:STRING
    },
    location:{
        type:STRING
    }
});



module.exports = ClassInfo;
