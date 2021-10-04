const Rider = require('../models/rider');

let currentUser = null;

module.exports = {
    index,
    create
}

function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  let currentUser = req.user;
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Rider.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('home', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function create(req,res, next) {
  console.log(req.body, '<- body', res.locals.user, '<-user')
  res.locals.user.posts.push(req.body);
  console.log(res.locals.user, 'updated rider')
}