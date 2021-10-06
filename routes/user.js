var router = require('express').Router();
var riderCtrl = require('../controllers/rider');

router.get('/:id', riderCtrl.show)

module.exports = router;