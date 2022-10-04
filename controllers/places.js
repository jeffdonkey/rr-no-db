const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//EDIT get route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  console.log("edit get route")
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

//SHOW route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log("delete gets" + id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

//UPDATE "complete route".
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log ('I got to the update route')
  console.log ("what data did i receive " + id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    if (!req.body.pic) {

      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }

    // Save the new data into places[id]
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})

//UPDATE stub
// router.put('/:id', (req, res) => {
//   res.send('PUT /places/ :id stub')
// })


//NEW post route
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})










module.exports = router