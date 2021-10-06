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


//move to post controller newride, createpost, deletepost

// function newRide(req,res){
//   res.render('new')
// }

// function createPost(req,res, next) {
//   console.log(req.user, '<-- user making the post ')
//   console.log(req.body, '<-- information inside of the post')
  
// }

// function deletePost(req,res){
//   console.log(req.params.id, '<---- post that needs to be deleted from rider profile')

//   // console.log(Rider.posts(req.params.id), '<---- post inside the rider model????')
//   Rider.

//   res.redirect('/home')
// }