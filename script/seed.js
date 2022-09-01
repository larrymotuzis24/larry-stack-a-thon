

const {db, models: {User, Worklocation, Workshift, ClassInfo, PlayerProfile} } = require('../server/db');


const {faker} = require('@faker-js/faker');
const ClassRoster = require('../server/db/models/ClassRoster');
console.log(faker)



/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')
  
  // Creating Users
  
  const Cody = await User.create({ username: 'cody', password: '123' });
  const Murphy = await User.create({ username: 'murphy', password: '123' });
  
    const playerRoster = []
  
  
  
  
  Array.from({ length: 300 }).forEach(async() => {
      playerRoster.push(await PlayerProfile.create({ firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        emergencyContact:`${faker.name.firstName()} ${faker.name.lastName()}`,
        emergencyContactPhone: faker.phone.number()}));
    });
  
    
  

  //creating WorkLocation
  const worklocations = await Promise.all([
    Worklocation.create({gymName:'OakBrook Park District', address:'122 lane', city:'Oakbrook', state:'IL', zipCode:'60516'}),
    Worklocation.create({gymName:'Connect 44', address:'1554 main steet', city:'Lombard', state:'IL', zipCode:'60516'}),
    Worklocation.create({gymName:'Hinsdale Community House', address:'123123 ave', city:'Hinsdale', state:'IL', zipCode:'60516'})
  ])

  
  const classes = await Promise.all([
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-05T11:30:00', end:'2022-09-05T13:00:00', practiceDays:'Mondays', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-05T13:00:00',end:'2022-09-05T14:30:00',  practiceDays:'Monday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-05T14:30:00',end:'2022-09-05T16:00:00', practiceDays:'Monday', location:'OakBrook Park District'}),

    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-07T11:30:00', end:'2022-09-07T13:00:00', practiceDays:'Wednsday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-07T13:00:00',end:'2022-09-07T14:30:00',  practiceDays:'Wednsday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-07T14:30:00',end:'2022-09-07T16:00:00', practiceDays:'Wendsday', location:'OakBrook Park District'}),


    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-09T11:30:00', end:'2022-09-09T13:00:00', practiceDays:'Friday', location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-09T13:00:00',end:'2022-09-09T14:30:00',  practiceDays:'Friday', location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', leadCoach:Cody.id, start:'2022-09-09T14:30:00',end:'2022-09-09T16:00:00', practiceDays:'Friday', location:'Hinsdale Community House'}),



    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-06T11:00:00', end:'2022-09-06T12:00:00', practiceDays:'Tuesday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-06T12:00:00',end:'2022-09-06T13:30:00',  practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-06T13:30:00',end:'2022-09-06T15:00:00', practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-06T15:00:00',end:'2022-09-06T16:30:00', practiceDays:'Tusday', location:'Connect 44 Center'}),

    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-08T11:00:00', end:'2022-09-08T12:00:00', practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-08T12:00:00',end:'2022-09-08T13:30:00',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-08T13:30:00',end:'2022-09-08T15:00:00', practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'GBL', leadCoach:Cody.id, start:'2022-09-08T15:00:00',end:'2022-09-08T16:30:00', practiceDays:'Thursday', location:'Connect 44 Center'}),


    ClassInfo.create({classTitle:'Sunday Night Shooting', leadCoach:Cody.id, start:'2022-09-11T11:00:00',end:'2022-09-11T12:30:00', practiceDays:'Thursday'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', leadCoach:Cody.id, start:'2022-09-11T12:30:00',end:'2022-09-11T14:00:00',  practiceDays:'Thursday'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', leadCoach:Cody.id, start:'2022-09-11T14:00:00',end:'2022-09-11T15:30:00', practiceDays:'Thursday'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', leadCoach:Cody.id, start:'2022-09-11T15:30:00',end:'2022-09-11T17:00:00', practiceDays:'Thursday'}),

    ClassRoster.create({playerProfileId:2, classInfoId:3}),
    ClassRoster.create({playerProfileId:3, classInfoId:3}),
    ClassRoster.create({playerProfileId:4, classInfoId:3}),
    ClassRoster.create({playerProfileId:5, classInfoId:3}),

    ClassRoster.create({playerProfileId:6, classInfoId:2}),
    ClassRoster.create({playerProfileId:7, classInfoId:2}),
    ClassRoster.create({playerProfileId:8, classInfoId:2}),
    ClassRoster.create({playerProfileId:9, classInfoId:2}),

    ClassRoster.create({playerProfileId:2, classInfoId:3}),
    ClassRoster.create({playerProfileId:3, classInfoId:3}),
    ClassRoster.create({playerProfileId:4, classInfoId:3}),
    ClassRoster.create({playerProfileId:5, classInfoId:3}),

    ClassRoster.create({playerProfileId:6, classInfoId:2}),
    ClassRoster.create({playerProfileId:7, classInfoId:2}),
    ClassRoster.create({playerProfileId:8, classInfoId:2}),
    ClassRoster.create({playerProfileId:9, classInfoId:2}),

    


  ])


  



  console.log(`seeded ${worklocations.length} worklocations`)
  console.log(classes)
  console.log(`seeded successfully`)
  return {
 
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
