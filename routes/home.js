var router = require('express').Router();
var homeCtrl = require('../controllers/home');

router.get('/home', homeCtrl.index)
router.post('/home', homeCtrl.createPost)

module.exports = router;