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

// EDIT

router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    soccer: SoccerTeams[req.params.id], 
    index: req.params.id
  })
})

// PUT

router.put('/:id', (req, res) => {
  if(req.body.won === 'on') {
      req.body.won = true
    } else {
      req.body.won = false
    }
  SoccerTeams[req.params.id] = req.body
  res.redirect('/soccer')
})

// SHOW

router.get('/:id', (req, res) => {
  res.render('show.ejs', {
    soccer: SoccerTeams[req.params.id]
  })
})

module.exports = router;