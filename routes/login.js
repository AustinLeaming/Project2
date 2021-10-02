var router = require('express').Router();
var loginCtrl = require('../controllers/login');

router.get('/login', loginCtrl.index)

module.exports = router;