const Rider = require('../models/rider');

module.exports = {
    index
}

function index (req,res,next) {
    
    Rider.findById(res.local.user, function(err, users) {
        if (err) return next(err);
        // Passing search values, name & sortKey, for use in the EJS
        res.render('profile', {
          user: req.user,
          name: req.query.name,
          riders: users,
        });
      });
}