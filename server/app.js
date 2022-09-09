const path = require('path')
const express = require('express')
const morgan = require('morgan')
const ClassInfo = require('./db/models/ClassInfo')
const PlayerProfile = require('./db/models/PlayerProfile')
const ClassRoster = require('./db/models/ClassRoster')
const User = require('./db/models/User')
const app = express()

module.exports = app


// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))



app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));


app.get('/players', async(req, res, next) => {
  try{
    res.send(await PlayerProfile.findAll())
  }
  catch(ex){
    next(ex)
  }
});

app.get('/classes', async(req, res, next) => {
  try{
     res.send(await ClassInfo.findAll())
  }
  catch(ex){
    console.log(ex)
  }
});

app.put('/classes/:id', async(req, res) => {
  try{
    const c = await ClassInfo.findByPk(req.params.id)
    await c.update(req.body)
    res.send(c)
  }
  catch(ex){
    console.log(err)
  }
})

app.get('/classRosters', async(req, res, next) => {
  try{
     res.send(await ClassRoster.findAll())
  }
  catch(ex){
    next(ex)
  }
});

app.get('/allCoaches', async(req, res, next) => {
  try{
    res.send(await User.findAll())
  }
  catch(ex){
    next(ex)
  }
});

app.post('/classes',async (req, res, next) => {
  try{
    const classesToCreate = req.body
    let createdClasses = {...classesToCreate.map(async(c) => {
      await ClassInfo.create(c) 
    })}
    
   res.send(createdClasses)
   
  }
  catch(ex){
    next(ex)
  }
})

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});
