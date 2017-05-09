// Methods that will execute the necessary MySQL commands in the controllers. These are the methods needed to use in order to retrieve and store data in your database.

// Import MySQL connection
var connection = require('../config/connection.js');

// Contains selectAll(), insersetOne(), and updateOne()
var orm = {
	selectAll: function(table, callback){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result){
			if (err) {
				throw err;
			}
			else if (callback) {
				return callback(result);
			}
			else {
				return result;
			}
		});
	},

	insertOne: function(table, burgerName, callback){
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)";

		connection.query(queryString, [burgerName], function(err, result){
			if (err){
				console.log (err);
			}
			else if (callback){
				return callback(result);
			}
			else {
				return result;
			}
		});

	},

	updateOne: function(table, id, callback){
		var queryString = "UPDATE " + table + " SET devoured=true WHERE ID = ?"
		connection.query(queryString, [id], function(err, result){
			if (err){
				throw err;
			}
			else if (callback){
				return callback(result);
			}
			else {
				return result;
			}
		})

	}

};

module.exports = orm;

