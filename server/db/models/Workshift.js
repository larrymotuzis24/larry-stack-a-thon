const Sequelize = require('sequelize')
const db = require('../db')
const {TIME } = Sequelize;


const Workshift = db.define('workshift', {
    shiftStart: {
        type:TIME
    },
    shiftEnd: {
        type: TIME
    }
})

module.exports = Workshift