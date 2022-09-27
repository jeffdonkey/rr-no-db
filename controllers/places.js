const router = require('express').Router()

//below "router.post" added in Part 5.5
//directions show that this existed before Part 5 but it was not in the code
//not sure if this is the right place for it, it works though
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

//the "get for new" was added in Part 5.2
router.get('/new', (req, res) => {
  res.render('places/new')
})



router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/kitten1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/kitten2.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router