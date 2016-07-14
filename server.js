var express = require('express'),
	app = express(),
	serverPort = 3000,
	middleware = require('./middleware.js');


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('<h1>About Us!<h1>');
});

app.listen(serverPort, function(err) {
	console.log('Server running on port ' + serverPort + '...');
});