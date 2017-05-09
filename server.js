var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(err){
	if (err){
		throw err;
	}
	else {
		console.log('Server listening on PORT%s', PORT);
	}

})

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var burgerController = require('./controllers/burgers_controller.js');
app.use('/', burgerController);