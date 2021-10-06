// not sure if I need to declare both models in here, leaving just in case it comes up
const User = require('../models/user');
const Ride = require('../models/rides');

module.exports = {
    index,
    allRides,
    show,
    newRide,
    create,
    edit,
    update,
    deleteRide
}

// render the logged in users rides
// needs a view
// im @ localhost:3000/rides
function index(req,res){
    console.log('index')
}

// render all the users rides
// needs a view 
// im @ localhost:3000/rides/all
function allRides(req,res){
    console.log('show')
}

// render one specific ride, we want to do add a comment to it 
// needs a view 
// im @ localhost:3000/rides/:id
function show(req,res){
    console.log('show')
}

// render a new page for a user to submit a ride 
// needs a view 
// im @ localhost:3000/rides/new
function newRide(req,res){
    console.log('newRide')
}

// handles the above function form being submitted, no view needed
function create(req,res){
    console.log('create')
}

// render an edit page, I want to 
// needs a view @ localhost:3000/rides/edit
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