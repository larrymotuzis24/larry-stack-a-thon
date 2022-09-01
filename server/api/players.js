const router = require('express').Router()
const { models: { PlayerProfile }} = require('../db')
module.exports = router

router.get('/players', async (req, res, next) => {
  try {
    const players = await PlayerProfile.findAll()
    res.json(players)
  } catch (err) {
    next(err)
  }
})