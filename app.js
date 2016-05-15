var express = require('express');
var app = express();
const port = 3000;

var path = require('path');

var whois = require('node-whois');
var parser = require('parse-whois');

const Traceroute = require('traceroute');

const geoip = require('geoip-lite');

app.use(express.static('src'));

var bodyParser = require('body-parser');

// Parses the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/getwhoislookup', function(req, res){
	var url = req.body.address;

	whois.lookup(url, function(err, data){
		if (err) {throw err;}

		console.log(data);
		res.send(parser.parseWhoIsData(data));
	});

});

app.post('/gettraceroute', function(req, res){
	var url = req.body.address;

	Traceroute.trace('google.com', (err, hops) => {
    if (err) {throw err;}

    console.log(hops);

    var outputData = [];

    // var newHops = hops.filter(function(val){
    // 	return typeof val !== 'boolean'
    // });

    // for(var i=0; i<hops.length; i++){
    // 	outputData.push(geoip.lookup(newHops[i]));
    // }

    // for(var i=0; i<hops.length; i++){
    // 	outputData.push(Object.assign({ip: val in newHops[i]}, geoip.lookup(newHops[i]) ));
    // }

    // Object.assign({}, obj)

    for(var i=0; i<hops.length; i++){
    	if(typeof hops[i] !== 'boolean'){
    		for(val in hops[i]){
    			console.log('Should be an ip --> ' + val);

    			outputData.push(
    				Object.assign( 
    					{ip: val},
    					geoip.lookup(val)
    				)
    			);
    		}
    	}
    }

    

    // res.send(hops);

    res.send(outputData);

	});

});


app.listen(port, function(){
	console.log("Listening on port -->" + port);
});









