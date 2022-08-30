const router = require('express').Router()
const { models: { Workshift }} = require('../db')
const Workshift = require('../db/models/Workshift')
module.exports = router

router.get('/workshifts', async (req, res, next) => {
  try {
    const workshifts = await Workshift.findAll()
    res.json(workshifts)
  } catch (err) {
    next(err)
  }
})