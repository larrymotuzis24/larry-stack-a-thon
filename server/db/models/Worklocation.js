const Sequelize = require('sequelize')
const db = require('../db')
const { STRING } = require('sequelize');

const Worklocation = db.define('workLocation', {
    gymName:{
        type: STRING
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
});

module.exports = Worklocation;


