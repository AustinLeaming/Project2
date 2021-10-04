const Rider = require('../models/rider');

module.exports = {
    index,
    createPost
}

function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  Rider.find({}, function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('home', {
      user: req.user,
      name: req.query.name,
      riders: users,
    });
  });
}

function createPost(req,res, next) {
  res.locals.user.posts.push(req.body);
  res.locals.user.save(function(err) {
    res.redirect('/home')
  })
  console.log(res.locals.user, 'updated rider')
}