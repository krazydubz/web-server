var express = require('express'),
	app = express();
var serverPort = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
	res.send('<h1>About Us!<h1>');
});

app.listen(serverPort, function(err) {
	console.log('Server running on port ' + serverPort + '...');
});