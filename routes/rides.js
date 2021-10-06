var router = require('express').Router();
var ridesCtrl = require('../controllers/rides');

// we are at localhost:3000/rides in here

// take me to the posts I (the user) made, let me see them
router.get('/', ridesCtrl.index)

// take me to the posts everyone has made, let me see them
router.get('/all', ridesCtrl.showAll)

// take me to the ride I just clicked on, all I want to see is this one ride - I wanna do stuff to it 
router.get('/:id', ridesCtrl.show)

// take me to the form to submit a ride
router.get('/new', ridesCtrl.new)

// handle the new ride (form) I just submitted
router.post('/', ridesCtrl.create)

// Take me to this ride I clicked on, I want to edit something on this ride - maybe I want to delete it
router.get('/:id/edit', ridesCtrl.edit)

// update that ride I clicked on just above, handle the update
router.put('/:id', ridesCtrl.update)

// delete the ride I clicked on just two steps above
router.delete('/:id', ridesCtrl.delete)

module.exports = router;