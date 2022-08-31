//this is the access point for all things database related!

const db = require('./db')
const Scheduel = require('./models/Scheduel')

const User = require('./models/User');
const Worklocation = require('./models/Worklocation');
const Workshift = require('./models/ClassInfo');
const Roster = require('./models/Roster');
const ClassInfo = require('./models/ClassInfo');
const PlayerProfile = require('./models/PlayerProfile');

//associations could go here!
Scheduel.belongsTo(User);
User.hasMany(Workshift);
Scheduel.hasMany(Workshift);
Workshift.hasOne(Worklocation);
Worklocation.belongsTo(Workshift)
ClassInfo.belongsTo(Workshift);
ClassInfo.hasMany(User)
Roster.belongsTo(ClassInfo);
Roster.hasMany(PlayerProfile);


module.exports = {
  db,
  models: {
    User,
    Worklocation, 
    Workshift,
     Worklocation,
     Roster,
     PlayerProfile,
     Scheduel,
     ClassInfo
  },
}
