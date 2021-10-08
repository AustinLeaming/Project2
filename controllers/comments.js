const Ride = require('../models/rides');

module.exports = {
    addComment,
    deleteComment,
}

// i want to add a comment to the ride thats been posted
function addComment(req,res){
    Ride.findById(req.params.id, function(err, ride) {
        ride.comments.push(req.body);
        console.log(req.body)
        ride.save(function(err) {
          res.redirect(`/rides/${ride._id}`);  
        });
    });
}

// i want to delete a comment on the ride thats been posted
function deleteComment(req,res){
    Ride.findOne({'comments._id': req.params.id}, function(err, ride) {
        const commentSubdoc = ride.comments.id(req.params.id);
        commentSubdoc.remove();
        ride.save(function(err) {
        res.redirect(`/rides/${ride._id}`);
        });
    });
}