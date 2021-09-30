var router = require('express').Router();
var riderCtrl = require('../controllers/rider');

router.get('/riders', riderCtrl.index)

module.exports = router;