var router = require('express').Router();
var ridesCtrl = require('../controllers/rides');

// we are at localhost:3000/rides in here

// take me to the posts I (the user) made, let me see them
router.get('/', ridesCtrl.index)

// take me to the posts everyone has made, let me see them
router.get('/all', ridesCtrl.showAll)

// take me to the form to submit a ride
// listen for get req on localhost:3000/rides/newRide
router.get('/new', ridesCtrl.new)

// take me to the ride I just clicked on, all I want to see is this one ride - I wanna see the comments on it 
router.get('/:id', ridesCtrl.showOne)

// Take me to this ride I clicked on, I want to edit something on this ride - maybe I want to delete it
router.get('/:id/edit', ridesCtrl.edit)

// handle the new ride (form) I just submitted
router.post('/', ridesCtrl.create)

// update that ride I clicked on just above, handle the update
router.put('/:id', ridesCtrl.update)

// delete the ride I clicked on 
router.delete('/:id', ridesCtrl.deleteRide)

module.exports = router;