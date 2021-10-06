var router = require('express').Router();
var riderCtrl = require('../controllers/user');

router.get('/:id', riderCtrl.show)

module.exports = router;