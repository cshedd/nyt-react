var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

// Catch-all route
var IndexRoute = Router.IndexRoute;

//Reference high-level components
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

// Export routes
module.exports = (

	<Route path='/' component={Main}>

		<Route path='Search' component={Search} />
		<Route path='Saved' component={Saved} />

		<IndexRoute component={Search} />

	</Route>	

	);