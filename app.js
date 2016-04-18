var express = require('express');
var app = express();
const port = 3000;

var whois = require('node-whois');

app.use(express.static('src'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/', function(req, res){
	res.sendfile('index.html');
});


app.post('/sendURL', function(req, res){
	console.log('It came in the route sendURL');

	console.log(req.body.address);

	res.contentType('json');

	whois.lookup(req.body.address, function(err, data){
		
		console.log(data);

		res.send(data);
	});

});


app.listen(port, function(){
	console.log("Listening on port " + port);
});