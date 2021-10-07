const User = require('../models/user');

module.exports = {
    show
}

function show(req,res){
  // this function shows all the riders posts 
  Post.find({user: req.params.id}, callbackFunc)
  // Rider.findById(req.params.id).exec(function (err,r) {
  //   // console.log(r, '<--- rider')
  //   // ^^^^^^ REMOVE AFTER TESTING 
  //   res.render('show', {r})
  })
}