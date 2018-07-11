const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const port = 4500

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const soccerTeamsController = require('./controllers/soccer_teams_controller')

app.use('/soccer', soccerTeamsController)

app.listen(port, () => {
  console.log("active on 4500")
})