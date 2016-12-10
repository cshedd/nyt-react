/*Include Axios library for HTTP requests*/
var axios = require('axios');

/* NYT API Key*/
var APIKey = '98877e1154184a78bc42052284b6bd6c';

// Helper functions
var helpers = {

	// Run query
	runQuery: function(term, start, end){

		// Adjust to get search times in proper form
		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";

		console.log("Query Run");

		// Run a query using Axios. Then return results as an object with an array.
		// Axios documentation
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
				'api-key': APIKey,
				'q': term,
				'begin_date': start,
				'end_date': end
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);

			return results.data.response;
		});

	},

	getSaved: function(){

		return axios.get('/api/saved')
				.then(function(results){
					console.log('axios results', results);
					return results;
				})
	},

	postSaved: function(){

		var newArticle = {title: title, date: date, url: url};
		return axios.post('/api/saved', newArticle)
				.then(function(results){
					console.log('axios.results', results._id);
					return results._id;
				})
	},

	deleteSaved: function(){
		return axios.delete('/api/saved', {
			params: {
				'title': title,
				'data': data,
				'url': url,
			}
		})
		.then(function(results){
			console.log('axios results', results);
			return results;
		})

	}

}

// Export helpers function
module.exports = helpers;