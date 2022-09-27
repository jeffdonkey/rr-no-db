//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
//NOTE: THE NEXT LINE BELOW WAS NOT IN THE INSTRUCTIONS FOR PART 1 OF THIS PROJECT
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//line below altered in Part 5.5
//creates "body parser"
// original line = app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', function (req, res){
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


// Listen for Connections
app.listen(process.env.PORT)