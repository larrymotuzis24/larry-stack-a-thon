

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
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05T11:30:00', end:'2022-09-05T13:00:00',timeRange:'4:30 - 6:00', practiceDays:'Mondays', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05T13:00:00',end:'2022-09-05T14:30:00', timeRange:'6:00 - 7:30',  practiceDays:'Monday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'PREP SCHOOL', userId:Jake.id, start:'2022-09-05T14:30:00',end:'2022-09-05T16:00:00', timeRange:'7:30 - 9:00', practiceDays:'Monday', location:'OakBrook Park District'}),

    ClassInfo.create({classTitle:'SPA', userId:Jake.id, start:'2022-09-07T11:30:00', end:'2022-09-07T13:00:00',timeRange:'530 - 6:40',  practiceDays:'Wednsday', location:'Lemont Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Jake.id, start:'2022-09-07T13:00:00',end:'2022-09-07T14:30:00', timeRange:'6:40 - 8:00',  practiceDays:'Wednsday', location:'Lemont Park District'}),



    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T12:00:00', end:'2022-09-09T13:00:00', timeRange:'5:00 - 6:00', practiceDays:'Friday', location:'Lombard'}),
    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T13:00:00',end:'2022-09-09T14:15:00', timeRange:'6:00 - 7:15',  practiceDays:'Friday', location:'Lombard'}),
    ClassInfo.create({classTitle:'SPA', userId:6, start:'2022-09-09T14:15:00',end:'2022-09-09T15:30:00',timeRange:'7:15 - 8:30',  practiceDays:'Friday', location:'Lombard'}),



    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T11:00:00', end:'2022-09-06T12:00:00',timeRange:'4:00 - 5:00',  practiceDays:'Tuesday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T12:00:00',end:'2022-09-06T13:30:00', timeRange:'5:00 - 6:30',  practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T13:30:00',end:'2022-09-06T15:00:00', timeRange:'6:30 - 8:00', practiceDays:'Tusday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-06T15:00:00',end:'2022-09-06T16:30:00', timeRange:'8:00 - 9:30', practiceDays:'Tusday', location:'Connect 44 Center'}),

    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T11:00:00', end:'2022-09-08T12:00:00',timeRange:'4:00 - 5:00',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T12:00:00',end:'2022-09-08T13:30:00', timeRange:'5:00 - 6:30',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T13:30:00',end:'2022-09-08T15:00:00',timeRange:'6:30 - 8:00',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    ClassInfo.create({classTitle:'HS GBL', userId:6, start:'2022-09-08T15:00:00',end:'2022-09-08T16:30:00',timeRange:'8:00 - 9:30',  practiceDays:'Thursday', location:'Connect 44 Center'}),
    
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T11:30:00',end:'2022-09-06T13:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T13:00:00',end:'2022-09-06T14:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-06T14:30:00',end:'2022-09-06T16:00:00', timeRange:'7:30 - 9:00', practiceDays:'Tuesday', location:'OakBrook Park District'}),
    
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T11:30:00',end:'2022-09-08T13:00:00',timeRange:'4:30 - 6:00',  practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T13:00:00',end:'2022-09-08T14:30:00',timeRange:'6:00 - 7:30',   practiceDays:'Thursday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'UA Experience', userId:Mirko.id, start:'2022-09-08T14:30:00',end:'2022-09-08T16:00:00', timeRange:'7:30 - 9:00', practiceDays:'Thursday', location:'OakBrook Park District'}),
    
    
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T10:00:00',end:'2022-09-11T11:15:00',timeRange:'3:00 - 4:15',  practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T11:15:00',end:'2022-09-11T12:30:00',timeRange:'4:15 - 5:30',   practiceDays:'Sunday',location:'Hinsdale Community House'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-11T12:30:00',end:'2022-09-11T13:45:00', timeRange:'5:30 - 6:45', practiceDays:'Sunday', location:'Hinsdale Community House'}),
    
    
    
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-09T11:30:00',end:'2022-09-09T12:30:00',timeRange:'4:30 - 5:30',  practiceDays:'Friday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Mirko.id, start:'2022-09-09T12:30:00',end:'2022-09-09T13:45:00',timeRange:'5:30 - 6:45',   practiceDays:'Friday',location:'OakBrook Park District'}),


    //coach marko scheduel

    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T11:30:00',end:'2022-09-11T12:45:00',timeRange:'4:30 - 5:45',  practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T12:45:00',end:'2022-09-11T14:00:00',timeRange:'5:45 - 7:00',   practiceDays:'Tuesday',location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T14:00:00',end:'2022-09-11T15:15:00',timeRange:'7:00 - 8:15',  practiceDays:'Tuesday', location:'OakBrook Park District'}),
    ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T15:15:00',end:'2022-09-11T16:30:00', timeRange:'8:15 - 9:30', practiceDays:'Tuesday', location:'OakBrook Park District'}),

    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-07-11T11:15:00',end:'2022-07-11T12:15:00',timeRange:'4:15 - 5:15',  practiceDays:'Wendsday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-07-11T12:15:00',end:'2022-07-11T13:30:00',timeRange:'5:15 - 6:30',   practiceDays:'Wendsday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-07-11T13:30:00',end:'2022-07-11T14:45:00',timeRange:'6:30 - 7:45',  practiceDays:'Wendsday', location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-07-11T14:45:00',end:'2022-07-11T16:00:00', timeRange:'7:45 - 9:00', practiceDays:'Wendsday', location:'OakBrook Park District'}),



    
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-08-11T11:30:00',end:'2022-08-11T12:45:00',timeRange:'4:30 - 5:45',  practiceDays:'Thursday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-08-11T12:45:00',end:'2022-08-11T14:00:00',timeRange:'5:45 - 7:00',   practiceDays:'Thursday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-08-11T14:00:00',end:'2022-08-11T15:15:00',timeRange:'7:00 - 8:15',  practiceDays:'Thursday', location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-08-11T15:15:00',end:'2022-08-11T16:30:00', timeRange:'8:15 - 9:30', practiceDays:'Thursday', location:'OakBrook Park District'}),
    
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T11:15:00',end:'2022-09-11T12:15:00',timeRange:'4:15 - 5:15',  practiceDays:'Friday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T12:15:00',end:'2022-09-11T13:15:00',timeRange:'5:15 - 6:15',   practiceDays:'Friday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T13:15:00',end:'2022-09-11T14:30:00',timeRange:'6:15 - 7:30',  practiceDays:'Friday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'SPA', userId:Marko.id, start:'2022-09-11T14:30:00',end:'2022-09-11T15:45:00',timeRange:'7:30 - 8:45',   practiceDays:'Friday',location:'OakBrook Park District'}),




    
    
    
    // ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T11:00:00',end:'2022-09-11T12:00:00',timeRange:'4:00 - 5:00',  practiceDays:'Sunday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T12:00:00',end:'2022-09-11T13:00:00',timeRange:'5:00 - 6:00',   practiceDays:'Sunday',location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T13:00:00',end:'2022-09-11T14:30:00',timeRange:'6:00 - 7:30',  practiceDays:'Sunday', location:'OakBrook Park District'}),
    // ClassInfo.create({classTitle:'Sunday Night Shooting', userId:Marko.id, start:'2022-09-11T14:30:00',end:'2022-09-11T16:00:00', timeRange:'7:30 - 9:00', practiceDays:'Sunday', location:'OakBrook Park District'}),
    
    
    
    
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
