var express = require('express');
var app = express();
const port = 3000;

var path = require('path');

var whois = require('node-whois');

var parser = require('parse-whois');

app.use(express.static('src'));

var bodyParser = require('body-parser');

// Parses the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sendURL', function(req, res){

	whois.lookup(req.body.address, function(err, data){

		console.log(data);

		res.send(parser.parseWhoIsData(data));
	});

});


app.listen(port, function(){
	console.log("Listening on port -->" + port);
});









