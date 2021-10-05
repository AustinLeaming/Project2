var router = require('express').Router();
var homeCtrl = require('../controllers/home');


router.get('/', homeCtrl.newRide)
router.post('/new-ride', homeCtrl.createPost)

module.exports = router;