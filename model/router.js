var Router = require('falcor-router');

// Load our routes
var routes = require('./routes/index');

// Create a Router base class and load up our routes
var FalcorAppRouterBase = Router.createClass(routes.load(this));

// Creating a constructor for a class that derives from BaseRouter
// We pass in the user id (or any other data) that needs to be used
// by the routes when making requests and responding with data
var FalcorAppRouter = function(key){
  // Invoking the base class constructor
  FalcorAppRouterBase.call(this);

  // Make our auth data available in every router instance
  this.sessionKey = key;
};

// Creating a derived class using JavaScript's classical inheritance pattern
FalcorAppRouter.prototype = Object.create(FalcorAppRouterBase.prototype);

// Use the factory pattern
module.exports = function(key) {
  return new FalcorAppRouter(key);
};
