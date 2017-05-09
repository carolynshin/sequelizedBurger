// Create the router for the app, and export the router at the end of your file.
var express = require('express');

var burger = require('../models/burger.js');

//create router for app and export router at end of your file
var router = express.Router();

//define homepage route
router.get('/', function(request, response){

	burger.all(function(result){

		var burger = {
			burger : result
		}

		response.render('index', burger);

	});

});

//post method route
router.post('/', function(request, response){

	burger.insert(request.body.addburger, function(result){

		burger.all(function(data){
			var burger = {
				burger: data
			}

			response.render('index', burger);
		})

	});

});






router.put('/:id', function(request, response){

	burger.update(request.params.id, function(result){
		burger.all(function(data){
			var burger = {
				burger: data
			}

			// response.render('index', burger);
			response.redirect("/");
		})
	})


});







module.exports = router;
