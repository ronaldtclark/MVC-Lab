const express = require('express');

const router = express.Router()

const SoccerTeams = require('../models/soccer_teams')


// INDEX

router.get('/', (req, res) => {
  res.render('index.ejs', {
    teams: SoccerTeams
  })
})

// DELETE

router.delete('/:id', (req, res) => {
  SoccerTeams.splice(req.params.id, 1)
  res.redirect('/soccer')
})


module.exports = router;