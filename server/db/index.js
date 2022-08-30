//this is the access point for all things database related!

const db = require('./db')
const Scheduel = require('./models/Scheduel')

const User = require('./models/User');
const Worklocation = require('./models/Worklocation');
const Workshift = require('./models/Workshift');
const Roster = require('./models/Roster');
const Class = require('./models/Class');
const PlayerProfile = require('./models/PlayerProfile');

//associations could go here!
Scheduel.belongsTo(User);
User.hasMany(Workshift);
Scheduel.hasMany(Workshift);
Workshift.hasOne(Worklocation);
Worklocation.belongsTo(Workshift)
Class.belongsTo(Workshift);
Class.hasMany(User)
Roster.belongsTo(Class);
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
     Scheduel
  },
}
