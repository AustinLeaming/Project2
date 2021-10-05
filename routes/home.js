var router = require('express').Router();
var homeCtrl = require('../controllers/home');

router.get('/', homeCtrl.index)
router.get('/new-ride', homeCtrl.newRide)
router.post('/', homeCtrl.createPost)
router.get('/:id', homeCtrl.show)
router.delete('/:id', homeCtrl.deletePost)

module.exports = router;