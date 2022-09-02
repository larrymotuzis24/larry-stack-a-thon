//this is the access point for all things database related!


const db = require('./db')
const Scheduel = require('./models/Scheduel')

const User = require('./models/User');
const Worklocation = require('./models/Worklocation');
const ClassRoster = require('./models/ClassRoster');
const ClassInfo = require('./models/ClassInfo');
const PlayerProfile = require('./models/PlayerProfile');

//associations could go here!
ClassRoster.belongsTo(ClassInfo);
ClassRoster.belongsTo(PlayerProfile);
ClassInfo.belongsTo(User);




module.exports = {
  db,
  models: {
    User,
    Worklocation,
     Worklocation,
    ClassRoster,
     PlayerProfile,
     Scheduel,
     ClassInfo
  },
}
