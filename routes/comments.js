var router = require('express').Router();
var riderCtrl = require('../controllers/comments');

router.get('/rides/:id/comments', commentsCtrl.addComment)

module.exports = router;