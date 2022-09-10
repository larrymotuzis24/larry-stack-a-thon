
const { TEXT } = require('sequelize');
const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = require('../db');


const ClassInfo = db.define('classInfo', {
    classTitle:{
        type:STRING
    },
    start:{
        type:STRING
    },
    end:{
        type:STRING
    },
    timeRange:{
        type:STRING
    },
    practiceDays:{
        type:STRING
    },
    location:{
        type:STRING
    },
    description:{
        type:TEXT
    }
});



module.exports = ClassInfo;
