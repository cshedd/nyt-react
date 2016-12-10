// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab property associated with Router
var Router = require('react-router').Router

// Grabs routes
var routes = require('./config/routes');

// This code here allows us to render our main component (in this case "Main")
// Displays contents in div of index.html
// ReactDOM takes in two parameters (contents and location)
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
)