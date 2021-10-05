const Rider = require('../models/rider');

module.exports = {
    index,
    createPost,
    newRide,
    show,
    deletePost
}

function index(req, res, next) {
  //this is what grabs all the info for the home page
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

function show(req,res){
  Rider.findById(req.params.id).exec(function (err,r) {
    // console.log(r, '<--- rider')
    // ^^^^^^ REMOVE AFTER TESTING 
    res.render('show', {r})
  })
}

function newRide(req,res){
  res.render('new')
}

function createPost(req,res, next) {
  console.log(res.locals.user, '<-- user making the post ')
  console.log(req.body, '<-- information inside of the post')
  res.redirect('home')
  console.log(res.locals.user.posts)
  res.locals.user.posts.push(req.body);
  // res.locals.user.save(function(err) {
  //   res.redirect('/home')
  // })
  console.log(res.locals.user, '<--- updated rider with posts')
}

function deletePost(req,res){
  console.log(req.params.id, '<---- post that needs to be deleted from rider profile')

  // console.log(Rider.posts(req.params.id), '<---- post inside the rider model????')
  req.user.remove(req.params.id)

  res.redirect('/home')
}