

const {db, models: {User, Worklocation, Workshift, ClassInfo, PlayerProfile} } = require('../server/db');


const {faker} = require('@faker-js/faker');
const ClassRoster = require('../server/db/models/ClassRoster');


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')
  
  // Creating Users
  
  const Mirko = await User.create({ username: 'coachMirko1', password: '123', firstName:'Mirko', lastName:'Gircic', email:'coachMurk@gmail.com' })
  const Marko = await User.create({ username: 'coachMarko', password: '123', firstName:'Marko', lastName:'Gircic',  email:'coachMarko@gmail.com'  })
  const Frank = await User.create({ username: 'coachFrank23', password: '123', firstName:'Frank', lastName:'Miterra',  email:'coachFrank@gmail.com', isAdmin:true });
  const Jake =  await User.create({ username: 'coachJake', password: '123', firstName:'Jake', lastName:'Neisman',  email:'coachJake@gmail.com'  })


   const assistantCoaches = await Promise.all([
    await User.create({ username: 'coachRyan', password: '123', firstName:'Ryan', lastName:'Lant' }),
    await User.create({ username: 'coachMattDacey', password: '123', firstName:'Matt', lastName:'Dacey' }),
    await User.create({ username: 'coachAlec', password: '123', firstName:'Alec', lastName:'Roundsville' }),
    await User.create({ username: 'coachJD', password: '123', firstName:'JD', lastName:'Anderson' }),
    await User.create({ username: 'coachLarry', password: '123', firstName:'Larry', lastName:'Motuzis' })


  ])

  
    const playerRoster = []
  
  
  
  
  Array.from({ length: 300 }).forEach(async() => {
      playerRoster.push(await PlayerProfile.create({ firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        emergencyContact:`${faker.name.firstName()} ${faker.name.lastName()}`,
        emergencyContactPhone: faker.phone.number('501-###-###')}));
    });
  
    
  

  //creating WorkLocation
  const worklocations = await Promise.all([
    Worklocation.create({gymName:'OakBrook Park District', address:'122 lane', city:'Oakbrook', state:'IL', zipCode:'60516'}),
    Worklocation.create({gymName:'Connect 44', address:'1554 main steet', city:'Lombard', state:'IL', zipCode:'60516'}),
    Worklocation.create({gymName:'Hinsdale Community House', address:'123123 ave', city:'Hinsdale', state:'IL', zipCode:'60516'})
  ])

  const addedBreakawayPlayers = await Promise.all([
    PlayerProfile.create({firstName:'Anesti', lastName:'Stavros', emergencyContact:'Bill Stavros', emergencyContactPhone:'708-322-3215'}),
    PlayerProfile.create({firstName:'Elena', lastName:'Stavros', emergencyContact:'Bill Stavros', emergencyContactPhone:'708-322-3215'}),
    PlayerProfile.create({firstName:'Michael', lastName:'Knighting', emergencyContact:'jen knighting', emergencyContactPhone:'332-642-5517'})
  ])

  
  const classes = await Promise.all([

    //jake classes
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05 16:00:00', end:'2022-09-05 17:30:00', practiceDays:'Mondays', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05 17:30:00',end:'2022-09-05 19:00:00',  practiceDays:'Monday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05 19:00:00',end:'2022-09-05 20:30:00',  practiceDays:'Monday', location:'OakBrook Park District'}),

    ClassInfo.create({classTitle:'SPA', userId:Jake.id, start:'2022-09-07T11:30:00', end:'2022-09-07T13:00:00',timeRange:'530 - 6:40',  practiceDays:'Wednsday', location:'Lemont Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Jake.id, start:'2022-09-07T13:00:00',end:'2022-09-07T14:30:00', timeRange:'6:40 - 8:00',  practiceDays:'Wednsday', location:'Lemont Park District'}),

    //matt classes

    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T16:00:00', end:'2022-09-09T17:30:00', timeRange:'5:00 - 6:00', practiceDays:'Friday', location:'Lombard'}),
    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T17:30:00',end:'2022-09-09T19:00:00', timeRange:'6:00 - 7:15',  practiceDays:'Friday', location:'Lombard'}),
    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T19:00:00',end:'2022-09-09T20:30:00',timeRange:'7:15 - 8:30',  practiceDays:'Friday', location:'Lombard'}),



    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T16:00:00', end:'2022-09-06T17:00:00',timeRange:'4:00 - 5:00',  practiceDays:'Tuesday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T17:00:00',end:'2022-09-06T18:30:00', timeRange:'5:00 - 6:30',  practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T18:30:00',end:'2022-09-06T20:00:00', timeRange:'6:30 - 8:00', practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T20:00:00',end:'2022-09-06T21:30:00', timeRange:'8:00 - 9:30', practiceDays:'Tusday', location:'Connect 44 Center'}),

    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T16:30:00', end:'2022-09-08T17:30:00',timeRange:'4:00 - 5:00',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T17:00:00',end:'2022-09-08T18:30:00', timeRange:'5:00 - 6:30',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T18:30:00',end:'2022-09-08T20:00:00',timeRange:'6:30 - 8:00',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T20:00:00',end:'2022-09-08T21:30:00',timeRange:'8:00 - 9:30',  practiceDays:'Thursday', location:'Connect 44 Center'}),


    // //mirko tuesday/thursday classes
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T16:30:00',end:'2022-09-06T18:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T18:00:00',end:'2022-09-06T19:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T19:30:00',end:'2022-09-06T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Tuesday', location:'OakBrook Park District'}),
    
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T16:30:00',end:'2022-09-08T18:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T18:00:00',end:'2022-09-08T19:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T19:30:00',end:'2022-09-08T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Thursday', location:'OakBrook Park District'}),

    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-13T16:30:00',end:'2022-09-13T18:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-13T18:00:00',end:'2022-09-13T19:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-13T19:30:00',end:'2022-09-13T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Tuesday', location:'OakBrook Park District'}),
    
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-15T16:30:00',end:'2022-09-15T18:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-15T18:00:00',end:'2022-09-15T19:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-15T19:30:00',end:'2022-09-15T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Thursday', location:'OakBrook Park District'}),
    
    // //coach murk wed classes
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Mirko.id, start:'2022-09-07T16:30:00', end:'2022-09-07T18:00:00',timeRange:'4:30 - 6:00', practiceDays:'Wednsday', location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Mirko.id, start:'2022-09-07T18:00:00',end:'2022-09-07T19:30:00', timeRange:'6:00 - 7:30',  practiceDays:'Wednsday', location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Mirko.id, start:'2022-09-07T19:30:00',end:'2022-09-07T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Wednsday', location:'Hinsdale Community House'}),

    //mirko sunday classes
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T16:00:00',end:'2022-09-11T17:15:00',timeRange:'3:00 - 4:15',  practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T17:15:00',end:'2022-09-11T18:30:00',timeRange:'4:15 - 5:30',   practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T18:30:00',end:'2022-09-11T19:45:00', timeRange:'5:30 - 6:45', practiceDays:'Sunday', location:'Hinsdale Community House'}),

    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-18T16:00:00',end:'2022-09-18T17:15:00',timeRange:'3:00 - 4:15',  practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-18T17:15:00',end:'2022-09-18T18:30:00',timeRange:'4:15 - 5:30',   practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-18T18:30:00',end:'2022-09-18T19:45:00', timeRange:'5:30 - 6:45', practiceDays:'Sunday', location:'Hinsdale Community House'}),
    
    
    
    
    
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-09T16:30:00',end:'2022-09-09T17:30:00',timeRange:'4:30 - 5:30',  practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-09T17:30:00',end:'2022-09-09T18:45:00',timeRange:'5:30 - 6:45',   practiceDays:'Friday',location:'OakBrook Park District'}),


        
    
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-16T16:30:00',end:'2022-09-16T17:30:00',timeRange:'4:30 - 5:30',  practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-16T17:30:00',end:'2022-09-16T18:45:00',timeRange:'5:30 - 6:45',   practiceDays:'Friday',location:'OakBrook Park District'}),


    // //coach marko scheduel

    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-06T16:30:00',end:'2022-09-06T17:45:00',timeRange:'4:30 - 5:45',  practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-06T17:45:00',end:'2022-09-06T19:00:00',timeRange:'5:45 - 7:00',   practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-06T19:00:00',end:'2022-09-06T20:15:00',timeRange:'7:00 - 8:15',  practiceDays:'Tuesday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-06T20:15:00',end:'2022-09-06T21:30:00', timeRange:'8:15 - 9:30', practiceDays:'Tuesday', location:'OakBrook Park District'}),

    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-07T16:15:00',end:'2022-09-07T17:15:00',timeRange:'4:15 - 5:15',  practiceDays:'Wendsday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-07T17:15:00',end:'2022-09-07T18:30:00',timeRange:'5:15 - 6:30',   practiceDays:'Wendsday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-07T18:30:00',end:'2022-09-07T19:45:00',timeRange:'6:30 - 7:45',  practiceDays:'Wendsday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-07T19:45:00',end:'2022-09-07T21:00:00', timeRange:'7:45 - 9:00', practiceDays:'Wendsday', location:'OakBrook Park District'}),



    
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-08T16:30:00',end:'2022-09-08T17:45:00',timeRange:'4:30 - 5:45',  practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-08T17:45:00',end:'2022-09-08T19:00:00',timeRange:'5:45 - 7:00',   practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-08T19:00:00',end:'2022-09-08T21:15:00',timeRange:'7:00 - 8:15',  practiceDays:'Thursday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-08T21:15:00',end:'2022-09-08T12:30:00', timeRange:'8:15 - 9:30', practiceDays:'Thursday', location:'OakBrook Park District'}),
    
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-09T16:15:00',end:'2022-09-09T17:15:00',timeRange:'4:15 - 5:15',  practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-09T17:15:00',end:'2022-09-09T18:15:00',timeRange:'5:15 - 6:15',   practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-09T18:15:00',end:'2022-09-09T19:30:00',timeRange:'6:15 - 7:30',  practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-09T19:30:00',end:'2022-09-09T20:45:00',timeRange:'7:30 - 8:45',   practiceDays:'Friday',location:'OakBrook Park District'}),


    
    ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T16:00:00',end:'2022-09-11T17:00:00',timeRange:'4:00 - 5:00',  practiceDays:'Sunday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T17:00:00',end:'2022-09-11T18:00:00',timeRange:'5:00 - 6:00',   practiceDays:'Sunday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T18:00:00',end:'2022-09-11T19:30:00',timeRange:'6:00 - 7:30',  practiceDays:'Sunday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T19:30:00',end:'2022-09-11T21:00:00', timeRange:'7:30 - 9:00', practiceDays:'Sunday', location:'OakBrook Park District'}),
    
    
    
    
    ClassRoster.create({playerProfileId:2, classInfoId:1}),
    ClassRoster.create({playerProfileId:3, classInfoId:1}),
    ClassRoster.create({playerProfileId:4, classInfoId:1}),
    ClassRoster.create({playerProfileId:5, classInfoId:1}),
    
    ClassRoster.create({playerProfileId:10, classInfoId:1}),
    ClassRoster.create({playerProfileId:11, classInfoId:1}),
    ClassRoster.create({playerProfileId:12, classInfoId:1}),
    ClassRoster.create({playerProfileId:13, classInfoId:1}),

    ClassRoster.create({playerProfileId:6, classInfoId:2}),
    ClassRoster.create({playerProfileId:7, classInfoId:2}),
    ClassRoster.create({playerProfileId:8, classInfoId:2}),
    ClassRoster.create({playerProfileId:9, classInfoId:2}),


    ClassRoster.create({playerProfileId:14, classInfoId:2}),
    ClassRoster.create({playerProfileId:15, classInfoId:2}),
    ClassRoster.create({playerProfileId:16, classInfoId:2}),
    ClassRoster.create({playerProfileId:17, classInfoId:2}),

    ClassRoster.create({playerProfileId:2, classInfoId:3}),
    ClassRoster.create({playerProfileId:3, classInfoId:3}),
    ClassRoster.create({playerProfileId:4, classInfoId:3}),
    ClassRoster.create({playerProfileId:5, classInfoId:3}),

    ClassRoster.create({playerProfileId:6, classInfoId:3}),
    ClassRoster.create({playerProfileId:7, classInfoId:3}),
    ClassRoster.create({playerProfileId:8, classInfoId:3}),
    ClassRoster.create({playerProfileId:9, classInfoId:3}),

    ClassRoster.create({playerProfileId:10, classInfoId:4}),
    ClassRoster.create({playerProfileId:11, classInfoId:4}),
    ClassRoster.create({playerProfileId:12, classInfoId:4}),
    ClassRoster.create({playerProfileId:13, classInfoId:4}),

    ClassRoster.create({playerProfileId:14, classInfoId:4}),
    ClassRoster.create({playerProfileId:15, classInfoId:4}),
    ClassRoster.create({playerProfileId:16, classInfoId:4}),
    ClassRoster.create({playerProfileId:17, classInfoId:4}),

    ClassRoster.create({playerProfileId:6, classInfoId:3}),
    ClassRoster.create({playerProfileId:7, classInfoId:3}),
    ClassRoster.create({playerProfileId:8, classInfoId:3}),
    ClassRoster.create({playerProfileId:9, classInfoId:3}),

    ClassRoster.create({playerProfileId:10, classInfoId:5}),
    ClassRoster.create({playerProfileId:11, classInfoId:5}),
    ClassRoster.create({playerProfileId:12, classInfoId:5}),
    ClassRoster.create({playerProfileId:13, classInfoId:5}),

    ClassRoster.create({playerProfileId:14, classInfoId:5}),
    ClassRoster.create({playerProfileId:15, classInfoId:5}),
    ClassRoster.create({playerProfileId:16, classInfoId:5}),
    ClassRoster.create({playerProfileId:17, classInfoId:5}),


    ClassRoster.create({playerProfileId:10, classInfoId:6}),
    ClassRoster.create({playerProfileId:11, classInfoId:6}),
    ClassRoster.create({playerProfileId:12, classInfoId:6}),
    ClassRoster.create({playerProfileId:13, classInfoId:6}),

    ClassRoster.create({playerProfileId:72, classInfoId:6}),
    ClassRoster.create({playerProfileId:99, classInfoId:6}),
    ClassRoster.create({playerProfileId:88, classInfoId:6}),
    ClassRoster.create({playerProfileId:68, classInfoId:6}),


    ClassRoster.create({playerProfileId:69, classInfoId:7}),
    ClassRoster.create({playerProfileId:23, classInfoId:7}),
    ClassRoster.create({playerProfileId:24, classInfoId:7}),
    ClassRoster.create({playerProfileId:47, classInfoId:7}),

    ClassRoster.create({playerProfileId:298, classInfoId:7}),
    ClassRoster.create({playerProfileId:153, classInfoId:7}),
    ClassRoster.create({playerProfileId:162, classInfoId:7}),
    ClassRoster.create({playerProfileId:170, classInfoId:7}),


    ClassRoster.create({playerProfileId:100, classInfoId:8}),
    ClassRoster.create({playerProfileId:14, classInfoId:8}),
    ClassRoster.create({playerProfileId:121, classInfoId:8}),
    ClassRoster.create({playerProfileId:13, classInfoId:8}),

    ClassRoster.create({playerProfileId:122, classInfoId:8}),
    ClassRoster.create({playerProfileId:22, classInfoId:8}),
    ClassRoster.create({playerProfileId:33, classInfoId:8}),
    ClassRoster.create({playerProfileId:43, classInfoId:8}),


    ClassRoster.create({playerProfileId:100, classInfoId:9}),
    ClassRoster.create({playerProfileId:14, classInfoId:9}),
    ClassRoster.create({playerProfileId:121, classInfoId:9}),
    ClassRoster.create({playerProfileId:13, classInfoId:9}),

    ClassRoster.create({playerProfileId:122, classInfoId:9}),
    ClassRoster.create({playerProfileId:22, classInfoId:9}),
    ClassRoster.create({playerProfileId:33, classInfoId:9}),
    ClassRoster.create({playerProfileId:43, classInfoId:9}),

    ClassRoster.create({playerProfileId:100, classInfoId:10}),
    ClassRoster.create({playerProfileId:14, classInfoId:10}),
    ClassRoster.create({playerProfileId:121, classInfoId:10}),
    ClassRoster.create({playerProfileId:13, classInfoId:10}),

    ClassRoster.create({playerProfileId:122, classInfoId:10}),
    ClassRoster.create({playerProfileId:22, classInfoId:10}),
    ClassRoster.create({playerProfileId:33, classInfoId:10}),
    ClassRoster.create({playerProfileId:43, classInfoId:10}),


    ClassRoster.create({playerProfileId:100, classInfoId:11}),
    ClassRoster.create({playerProfileId:14, classInfoId:11}),
    ClassRoster.create({playerProfileId:121, classInfoId:11}),
    ClassRoster.create({playerProfileId:13, classInfoId:11}),

    ClassRoster.create({playerProfileId:122, classInfoId:11}),
    ClassRoster.create({playerProfileId:22, classInfoId:11}),
    ClassRoster.create({playerProfileId:33, classInfoId:11}),
    ClassRoster.create({playerProfileId:43, classInfoId:11}),

    ClassRoster.create({playerProfileId:100, classInfoId:12}),
    ClassRoster.create({playerProfileId:14, classInfoId:12}),
    ClassRoster.create({playerProfileId:121, classInfoId:12}),
    ClassRoster.create({playerProfileId:13, classInfoId:12}),

    ClassRoster.create({playerProfileId:122, classInfoId:12}),
    ClassRoster.create({playerProfileId:22, classInfoId:12}),
    ClassRoster.create({playerProfileId:33, classInfoId:12}),
    ClassRoster.create({playerProfileId:43, classInfoId:12}),

    ClassRoster.create({playerProfileId:100, classInfoId:13}),
    ClassRoster.create({playerProfileId:14, classInfoId:13}),
    ClassRoster.create({playerProfileId:121, classInfoId:13}),
    ClassRoster.create({playerProfileId:13, classInfoId:13}),

    ClassRoster.create({playerProfileId:122, classInfoId:13}),
    ClassRoster.create({playerProfileId:22, classInfoId:13}),
    ClassRoster.create({playerProfileId:33, classInfoId:13}),
    ClassRoster.create({playerProfileId:43, classInfoId:13}),

    ClassRoster.create({playerProfileId:100, classInfoId:14}),
    ClassRoster.create({playerProfileId:14, classInfoId:14}),
    ClassRoster.create({playerProfileId:121, classInfoId:14}),
    ClassRoster.create({playerProfileId:13, classInfoId:14}),

    ClassRoster.create({playerProfileId:122, classInfoId:14}),
    ClassRoster.create({playerProfileId:22, classInfoId:14}),
    ClassRoster.create({playerProfileId:33, classInfoId:14}),
    ClassRoster.create({playerProfileId:43, classInfoId:14}),

    ClassRoster.create({playerProfileId:100, classInfoId:15}),
    ClassRoster.create({playerProfileId:14, classInfoId:15}),
    ClassRoster.create({playerProfileId:121, classInfoId:15}),
    ClassRoster.create({playerProfileId:13, classInfoId:15}),

    ClassRoster.create({playerProfileId:122, classInfoId:15}),
    ClassRoster.create({playerProfileId:22, classInfoId:15}),
    ClassRoster.create({playerProfileId:33, classInfoId:15}),
    ClassRoster.create({playerProfileId:43, classInfoId:15}),

    ClassRoster.create({playerProfileId:100, classInfoId:16}),
    ClassRoster.create({playerProfileId:14, classInfoId:16}),
    ClassRoster.create({playerProfileId:121, classInfoId:16}),
    ClassRoster.create({playerProfileId:13, classInfoId:16}),

    ClassRoster.create({playerProfileId:122, classInfoId:16}),
    ClassRoster.create({playerProfileId:22, classInfoId:16}),
    ClassRoster.create({playerProfileId:33, classInfoId:16}),
    ClassRoster.create({playerProfileId:43, classInfoId:16}),

    ClassRoster.create({playerProfileId:100, classInfoId:17}),
    ClassRoster.create({playerProfileId:14, classInfoId:17}),
    ClassRoster.create({playerProfileId:121, classInfoId:17}),
    ClassRoster.create({playerProfileId:13, classInfoId:17}),

    ClassRoster.create({playerProfileId:122, classInfoId:17}),
    ClassRoster.create({playerProfileId:22, classInfoId:17}),
    ClassRoster.create({playerProfileId:33, classInfoId:17}),
    ClassRoster.create({playerProfileId:43, classInfoId:17}),


    ClassRoster.create({playerProfileId:100, classInfoId:18}),
    ClassRoster.create({playerProfileId:14, classInfoId:18}),
    ClassRoster.create({playerProfileId:121, classInfoId:18}),
    ClassRoster.create({playerProfileId:13, classInfoId:18}),

    ClassRoster.create({playerProfileId:122, classInfoId:18}),
    ClassRoster.create({playerProfileId:22, classInfoId:18}),
    ClassRoster.create({playerProfileId:33, classInfoId:18}),
    ClassRoster.create({playerProfileId:43, classInfoId:18}),

    ClassRoster.create({playerProfileId:100, classInfoId:19}),
    ClassRoster.create({playerProfileId:14, classInfoId:19}),
    ClassRoster.create({playerProfileId:121, classInfoId:19}),
    ClassRoster.create({playerProfileId:13, classInfoId:19}),

    ClassRoster.create({playerProfileId:122, classInfoId:19}),
    ClassRoster.create({playerProfileId:22, classInfoId:19}),
    ClassRoster.create({playerProfileId:33, classInfoId:19}),
    ClassRoster.create({playerProfileId:43, classInfoId:19}),

    ClassRoster.create({playerProfileId:100, classInfoId:20}),
    ClassRoster.create({playerProfileId:14, classInfoId:20}),
    ClassRoster.create({playerProfileId:121, classInfoId:20}),
    ClassRoster.create({playerProfileId:13, classInfoId:20}),

    ClassRoster.create({playerProfileId:122, classInfoId:20}),
    ClassRoster.create({playerProfileId:22, classInfoId:20}),
    ClassRoster.create({playerProfileId:33, classInfoId:20}),
    ClassRoster.create({playerProfileId:43, classInfoId:20}),

    ClassRoster.create({playerProfileId:100, classInfoId:21}),
    ClassRoster.create({playerProfileId:14, classInfoId:21}),
    ClassRoster.create({playerProfileId:121, classInfoId:21}),
    ClassRoster.create({playerProfileId:13, classInfoId:21}),

    ClassRoster.create({playerProfileId:122, classInfoId:21}),
    ClassRoster.create({playerProfileId:22, classInfoId:21}),
    ClassRoster.create({playerProfileId:33, classInfoId:21}),
    ClassRoster.create({playerProfileId:43, classInfoId:21}),

    ClassRoster.create({playerProfileId:301, classInfoId:1}),
    ClassRoster.create({playerProfileId:301, classInfoId:8}),
    ClassRoster.create({playerProfileId:301, classInfoId:15}),
    ClassRoster.create({playerProfileId:301, classInfoId:20}),

    ClassRoster.create({playerProfileId:302, classInfoId:2}),
    ClassRoster.create({playerProfileId:302, classInfoId:6}),
    ClassRoster.create({playerProfileId:302, classInfoId:13}),
    ClassRoster.create({playerProfileId:302, classInfoId:21}),

    ClassRoster.create({playerProfileId:303, classInfoId:1}),
    ClassRoster.create({playerProfileId:303, classInfoId:5}),
    ClassRoster.create({playerProfileId:303, classInfoId:9}),
    ClassRoster.create({playerProfileId:303, classInfoId:15}),



    ClassRoster.create({playerProfileId:271, classInfoId:30}),
    ClassRoster.create({playerProfileId:255, classInfoId:30}),
    ClassRoster.create({playerProfileId:231, classInfoId:30}),
    ClassRoster.create({playerProfileId:222, classInfoId:30}),
    ClassRoster.create({playerProfileId:272, classInfoId:30}),
    ClassRoster.create({playerProfileId:273, classInfoId:30}),
    ClassRoster.create({playerProfileId:274, classInfoId:30}),
    ClassRoster.create({playerProfileId:201, classInfoId:30}),
    ClassRoster.create({playerProfileId:202, classInfoId:30}),
    ClassRoster.create({playerProfileId:220, classInfoId:30}),
    ClassRoster.create({playerProfileId:225, classInfoId:30}),
    ClassRoster.create({playerProfileId:256, classInfoId:30}),



    ClassRoster.create({playerProfileId:171, classInfoId:31}),
    ClassRoster.create({playerProfileId:155, classInfoId:31}),
    ClassRoster.create({playerProfileId:131, classInfoId:31}),
    ClassRoster.create({playerProfileId:122, classInfoId:31}),
    ClassRoster.create({playerProfileId:172, classInfoId:31}),
    ClassRoster.create({playerProfileId:173, classInfoId:31}),
    ClassRoster.create({playerProfileId:174, classInfoId:31}),
    ClassRoster.create({playerProfileId:101, classInfoId:31}),
    ClassRoster.create({playerProfileId:102, classInfoId:31}),
    ClassRoster.create({playerProfileId:120, classInfoId:31}),
    ClassRoster.create({playerProfileId:125, classInfoId:31}),
    ClassRoster.create({playerProfileId:156, classInfoId:31}),


    ClassRoster.create({playerProfileId:71, classInfoId:22}),
    ClassRoster.create({playerProfileId:55, classInfoId:22}),
    ClassRoster.create({playerProfileId:31, classInfoId:22}),
    ClassRoster.create({playerProfileId:22, classInfoId:22}),
    ClassRoster.create({playerProfileId:72, classInfoId:22}),
    ClassRoster.create({playerProfileId:73, classInfoId:22}),
    ClassRoster.create({playerProfileId:74, classInfoId:22}),
    ClassRoster.create({playerProfileId:01, classInfoId:22}),
    ClassRoster.create({playerProfileId:02, classInfoId:22}),
    ClassRoster.create({playerProfileId:20, classInfoId:22}),
    ClassRoster.create({playerProfileId:25, classInfoId:22}),
    ClassRoster.create({playerProfileId:56, classInfoId:22}),


    ClassRoster.create({playerProfileId:141, classInfoId:38}),
    ClassRoster.create({playerProfileId:125, classInfoId:38}),
    ClassRoster.create({playerProfileId:138, classInfoId:38}),
    ClassRoster.create({playerProfileId:162, classInfoId:38}),
    ClassRoster.create({playerProfileId:112, classInfoId:38}),
    ClassRoster.create({playerProfileId:243, classInfoId:38}),
    ClassRoster.create({playerProfileId:275, classInfoId:38}),
    ClassRoster.create({playerProfileId:241, classInfoId:38}),
    ClassRoster.create({playerProfileId:298, classInfoId:38}),
    ClassRoster.create({playerProfileId:199, classInfoId:38}),
    ClassRoster.create({playerProfileId:198, classInfoId:38}),
    ClassRoster.create({playerProfileId:197, classInfoId:38}),


    ClassRoster.create({playerProfileId:166, classInfoId:39}),
    ClassRoster.create({playerProfileId:121, classInfoId:39}),
    ClassRoster.create({playerProfileId:167, classInfoId:39}),
    ClassRoster.create({playerProfileId:169, classInfoId:39}),
    ClassRoster.create({playerProfileId:196, classInfoId:39}),
    ClassRoster.create({playerProfileId:217, classInfoId:39}),
    ClassRoster.create({playerProfileId:166, classInfoId:39}),
    ClassRoster.create({playerProfileId:111, classInfoId:39}),
    ClassRoster.create({playerProfileId:2, classInfoId:39}),
    ClassRoster.create({playerProfileId:56, classInfoId:39}),
    ClassRoster.create({playerProfileId:69, classInfoId:39}),
    ClassRoster.create({playerProfileId:19, classInfoId:39}),


    ClassRoster.create({playerProfileId:16, classInfoId:25}),
    ClassRoster.create({playerProfileId:12, classInfoId:25}),
    ClassRoster.create({playerProfileId:16, classInfoId:25}),
    ClassRoster.create({playerProfileId:16, classInfoId:25}),
    ClassRoster.create({playerProfileId:19, classInfoId:25}),
    ClassRoster.create({playerProfileId:21, classInfoId:25}),
    ClassRoster.create({playerProfileId:16, classInfoId:25}),
    ClassRoster.create({playerProfileId:11, classInfoId:25}),
    ClassRoster.create({playerProfileId:24, classInfoId:25}),
    ClassRoster.create({playerProfileId:5, classInfoId:25}),
    ClassRoster.create({playerProfileId:6, classInfoId:25}),
    ClassRoster.create({playerProfileId:1, classInfoId:25}),



    ClassRoster.create({playerProfileId:266, classInfoId:23}),
    ClassRoster.create({playerProfileId:221, classInfoId:23}),
    ClassRoster.create({playerProfileId:267, classInfoId:23}),
    ClassRoster.create({playerProfileId:269, classInfoId:23}),
    ClassRoster.create({playerProfileId:296, classInfoId:23}),
    ClassRoster.create({playerProfileId:117, classInfoId:23}),
    ClassRoster.create({playerProfileId:266, classInfoId:23}),
    ClassRoster.create({playerProfileId:211, classInfoId:23}),
    ClassRoster.create({playerProfileId:22, classInfoId:23}),
    ClassRoster.create({playerProfileId:256, classInfoId:23}),
    ClassRoster.create({playerProfileId:269, classInfoId:23}),
    ClassRoster.create({playerProfileId:219, classInfoId:23}),


    ClassRoster.create({playerProfileId:11, classInfoId:28}),
    ClassRoster.create({playerProfileId:12, classInfoId:28}),
    ClassRoster.create({playerProfileId:14, classInfoId:28}),
    ClassRoster.create({playerProfileId:16, classInfoId:28}),
    ClassRoster.create({playerProfileId:19, classInfoId:28}),
    ClassRoster.create({playerProfileId:26, classInfoId:28}),
    ClassRoster.create({playerProfileId:29, classInfoId:28}),
    ClassRoster.create({playerProfileId:46, classInfoId:28}),
    ClassRoster.create({playerProfileId:37, classInfoId:28}),
    ClassRoster.create({playerProfileId:55, classInfoId:28}),
    ClassRoster.create({playerProfileId:53, classInfoId:28}),
    ClassRoster.create({playerProfileId:83, classInfoId:28}),

    ClassRoster.create({playerProfileId:300, classInfoId:26}),
    ClassRoster.create({playerProfileId:291, classInfoId:26}),
    ClassRoster.create({playerProfileId:281, classInfoId:26}),
    ClassRoster.create({playerProfileId:282, classInfoId:26}),
    ClassRoster.create({playerProfileId:289, classInfoId:26}),
    ClassRoster.create({playerProfileId:277, classInfoId:26}),
    ClassRoster.create({playerProfileId:294, classInfoId:26}),
    ClassRoster.create({playerProfileId:126, classInfoId:26}),
    ClassRoster.create({playerProfileId:239, classInfoId:26}),
    ClassRoster.create({playerProfileId:179, classInfoId:26}),
    ClassRoster.create({playerProfileId:173, classInfoId:26}),
    ClassRoster.create({playerProfileId:172, classInfoId:26}),



    ClassRoster.create({playerProfileId:1, classInfoId:42}),
    ClassRoster.create({playerProfileId:2, classInfoId:42}),
    ClassRoster.create({playerProfileId:3, classInfoId:42}),
    ClassRoster.create({playerProfileId:4, classInfoId:42}),
    ClassRoster.create({playerProfileId:5, classInfoId:42}),
    ClassRoster.create({playerProfileId:6, classInfoId:42}),
    ClassRoster.create({playerProfileId:7, classInfoId:42}),
    ClassRoster.create({playerProfileId:8, classInfoId:42}),
    ClassRoster.create({playerProfileId:9, classInfoId:42}),
    ClassRoster.create({playerProfileId:10, classInfoId:42}),
    ClassRoster.create({playerProfileId:11, classInfoId:42}),
    ClassRoster.create({playerProfileId:12, classInfoId:42}),


    ClassRoster.create({playerProfileId:11, classInfoId:40}),
    ClassRoster.create({playerProfileId:12, classInfoId:40}),
    ClassRoster.create({playerProfileId:13, classInfoId:40}),
    ClassRoster.create({playerProfileId:14, classInfoId:40}),
    ClassRoster.create({playerProfileId:15, classInfoId:40}),
    ClassRoster.create({playerProfileId:16, classInfoId:40}),
    ClassRoster.create({playerProfileId:17, classInfoId:40}),
    ClassRoster.create({playerProfileId:18, classInfoId:40}),
    ClassRoster.create({playerProfileId:19, classInfoId:40}),
    ClassRoster.create({playerProfileId:110, classInfoId:40}),
    ClassRoster.create({playerProfileId:111, classInfoId:40}),
    ClassRoster.create({playerProfileId:112, classInfoId:40}),

    ClassRoster.create({playerProfileId:211, classInfoId:35}),
    ClassRoster.create({playerProfileId:212, classInfoId:35}),
    ClassRoster.create({playerProfileId:213, classInfoId:35}),
    ClassRoster.create({playerProfileId:214, classInfoId:35}),
    ClassRoster.create({playerProfileId:215, classInfoId:35}),
    ClassRoster.create({playerProfileId:216, classInfoId:35}),
    ClassRoster.create({playerProfileId:217, classInfoId:35}),
    ClassRoster.create({playerProfileId:218, classInfoId:35}),
    ClassRoster.create({playerProfileId:219, classInfoId:35}),
    ClassRoster.create({playerProfileId:210, classInfoId:35}),
    ClassRoster.create({playerProfileId:211, classInfoId:35}),
    ClassRoster.create({playerProfileId:212, classInfoId:35}),


    ClassRoster.create({playerProfileId:299, classInfoId:36}),
    ClassRoster.create({playerProfileId:300, classInfoId:36}),
    ClassRoster.create({playerProfileId:298, classInfoId:36}),
    ClassRoster.create({playerProfileId:297, classInfoId:36}),
    ClassRoster.create({playerProfileId:296, classInfoId:36}),
    ClassRoster.create({playerProfileId:295, classInfoId:36}),
    ClassRoster.create({playerProfileId:294, classInfoId:36}),
    ClassRoster.create({playerProfileId:293, classInfoId:36}),
    ClassRoster.create({playerProfileId:292, classInfoId:36}),
    ClassRoster.create({playerProfileId:291, classInfoId:36}),
    ClassRoster.create({playerProfileId:290, classInfoId:36}),
    ClassRoster.create({playerProfileId:289, classInfoId:36}),

    ClassRoster.create({playerProfileId:199, classInfoId:37}),
    ClassRoster.create({playerProfileId:198, classInfoId:37}),
    ClassRoster.create({playerProfileId:197, classInfoId:37}),
    ClassRoster.create({playerProfileId:196, classInfoId:37}),
    ClassRoster.create({playerProfileId:195, classInfoId:37}),
    ClassRoster.create({playerProfileId:194, classInfoId:37}),
    ClassRoster.create({playerProfileId:193, classInfoId:37}),
    ClassRoster.create({playerProfileId:192, classInfoId:37}),
    ClassRoster.create({playerProfileId:191, classInfoId:37}),
    ClassRoster.create({playerProfileId:190, classInfoId:37}),
    ClassRoster.create({playerProfileId:189, classInfoId:37}),
    ClassRoster.create({playerProfileId:188, classInfoId:37}),

    ClassRoster.create({playerProfileId:70, classInfoId:29}),
    ClassRoster.create({playerProfileId:69, classInfoId:29}),
    ClassRoster.create({playerProfileId:68, classInfoId:29}),
    ClassRoster.create({playerProfileId:67, classInfoId:29}),
    ClassRoster.create({playerProfileId:66, classInfoId:29}),
    ClassRoster.create({playerProfileId:65, classInfoId:29}),
    ClassRoster.create({playerProfileId:64, classInfoId:29}),
    ClassRoster.create({playerProfileId:63, classInfoId:29}),
    ClassRoster.create({playerProfileId:62, classInfoId:29}),
    ClassRoster.create({playerProfileId:61, classInfoId:29}),
    ClassRoster.create({playerProfileId:60, classInfoId:29}),
    ClassRoster.create({playerProfileId:59, classInfoId:29}),














  ])


  return {
 
  }
}


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

if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
