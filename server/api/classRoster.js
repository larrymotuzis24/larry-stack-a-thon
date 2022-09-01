const router = require('express').Router()
const { models: { ClassRoster }} = require('../db')
module.exports = router

router.get('/classRosters', async (req, res, next) => {
  try {
    const rosters = await ClassRoster.findAll()
    res.json(rosters)
  } catch (err) {
    next(err)
  }
})