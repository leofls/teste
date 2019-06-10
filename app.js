var express = require('express')
var faker = require('faker')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded())

app.locals.foods = require('./data/characters.json')
app.locals.points = "10";

// ROTAS
app.get('/', (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placekitten.com/300/300'
      }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placekitten.com/400/300'
      }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placekitten.com/500/300'
      }]
    
    res.render('pages/home',  { usuarios: users })
})

app.get('/teste', (req, res) => {
  
  res.render('pages/teste',)
})



app.use(express.static(__dirname + '/public'))
app.listen(port)
console.log('Servidor iniciado em http://localhost:' + port)