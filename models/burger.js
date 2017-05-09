// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.


var orm = require('../config/orm.js');

var burger = {


	all: function(callback){
		orm.selectAll("burgers", callback)
		},

	insert: function(burgerName, callback){
		orm.insertOne("burgers", burgerName, callback)
		},

	update: function(id, callback){
		orm.updateOne("burgers", id, callback)
		},

}

module.exports = burger;