var router = require('express').Router();
var homeCtrl = require('../controllers/home');

router.get('/home', homeCtrl.index)

module.exports = router;