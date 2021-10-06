// not sure if I need to declare both models in here, leaving just in case it comes up
const User = require('../models/user');
const Ride = require('../models/rides');
const { render } = require('../server');

module.exports = {
    index,
    showAll,
    showOne,
    new: newRide,
    create,
    edit,
    update,
    deleteRide
}

// render the logged in users rides
// needs a view
// i happen @ localhost:3000/rides
// I pulled this function directly from the passport-boilerplate in SEI-WEST-COAST-8-30/work/w05/d3
function index(req, res, next) {
    console.log(req.query)
    console.log(req.user, '<-- this is my logged in user', '<-- im inside of controllers/riders/index')
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('rides/index', {
        users,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }

// render all the users rides
// needs a view 
// i happen @ localhost:3000/rides/all
function showAll(req,res){
    console.log('show function')
    let rideQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    Ride.find(rideQuery, function (err, rides) {
        res.render('rides/all', {
            rides,
            user: req.user,
            nameSearch: req.query.name
        })
    })
}

// render one specific ride, we want to do add a comment to it 
// needs a view 
// i happen @ localhost:3000/rides/:id
function showOne(req,res){
    console.log('showOne')
}

// render a new page for a user to submit a ride 
// needs a view 
// i happen localhost:3000/rides/new
function newRide(req,res){
    res.render('rides/new')
}

// handles the above function form being submitted 
// no view needed but redirect to localhost:3000/rides - we want to see the new post on my page
function create(req,res){
    console.log('create function inside the rides controller')
    console.log(req.body, '<-- form being submitted')
    console.log(req.user, '<-- user submitting the form')

    const ride = new Ride(req.body);
    ride.user = req.user._id;
    ride.save(function(err) {
        if (err) return render('rides')
    })
    res.redirect('rides/all')
    
}

// render an edit page, I want to edit it, or remove it 
// needs a view 
// i happen @ localhost:3000/rides/edit
function edit(req,res){
    console.log('edit')
}

// handles the above function form being submitted - edits the ride
function update(req,res){
    console.log('update')
}

// handles the delete button in the edit view 
function deleteRide(req,res){
    console.log('delete')
}