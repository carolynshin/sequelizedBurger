// Create the router for the app, and export the router at the end of your file.
var express = require('express');

var burger = require('../models/burger.js');

//create router for app and export router at end of your file
var router = express.Router();

var db = require('../models');

//define homepage route
router.get('/', function(request, response){
	db.Burger.findAll({}).then(function(result){

		var burger = {
			burger:result
		};

		response.render('index', burger);

	});

});

//post method route
router.post('/', function(request, response){

	db.Burger.create({
		burger_name: request.body.addburger,
		devoured: false
	}).then(function(result){
		response.redirect('/');
	});
});


//update 

router.put('/:id', function(request, response){

	db.Burger.update({
		devoured: true
	}, {
		where: {
			id: request.params.id
		}
	}).then(function(result){
		response.redirect('/');
	})
});

module.exports = router;