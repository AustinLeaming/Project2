var router = require('express').Router();
var commentCtrl = require('../controllers/comments');

router.post('/rides/:id/comments', commentCtrl.addComment)
router.delete('/comments/:id', commentCtrl.deleteComment)

module.exports = router;