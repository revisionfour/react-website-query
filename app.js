var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const port = 3000;

var path = require('path');

var whois = require('node-whois');
var parser = require('parse-whois');

const Traceroute = require('./traceroute');
const geoip = require('geoip-lite');

var bodyParser = require('body-parser');

app.use(express.static('src'));

// Parses the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

io.on('connection', function(socket){
  console.log('client connected!!');


  socket.emit('init', port);


  /*
  socket.on('connected',function(){
    console.log('Client connected!!!');
  });
  */

  socket.on('gettraceroute', function(obj){

    // socket.emit('cleartraceroute');

    var url = obj.url;

    console.log(url);

    const trace = Traceroute.trace(url);

    trace.on('hop', (hop) => {

      // if(typeof hop !== 'boolean'){
      //   return;
      // }

      console.log(hop);

      if(typeof hop == 'boolean'){
        console.log('its a boolean, return');
        return;
      }
      if(typeof hop == 'object'){
        console.log('its an object');
        let val = Object.keys(hop)[0];
        socket.emit('traceroute', Object.assign({ip: val}, geoip.lookup(val)));
      }
      else {
        console.log('its an array');
        hop.forEach(function(element, index){
          if(typeof element == 'object'){
            let val = Object.keys(element);
            socket.emit('traceroute', Object.assign({ip: val}, geoip.lookup(val)));
          }
        });
      }

      /*
      for(val in hop){

          console.log(val);

          outputData.push(
            Object.assign( 
              {ip: val},
              geoip.lookup(val)
            )
          );
        }
        */

      // socket.emit('traceroute', hop);
    });

    trace.on('done', (hops) => {
      console.log('All the hops!!');
      console.log(hops);
      // socket.emit('traceroutedone', hops.filter(function(val){
      //   return typeof val != 'boolean'; 
      // }));

      socket.emit('traceroutedone', hops.filter(function(val){
        return typeof val != 'boolean'; 
      }));
      
    });

  });


});

app.post('/getwhoislookup', function(req, res){
	var url = req.body.address;

	whois.lookup(url, function(err, data){
		if (err) {throw err;}

		console.log(data);
		res.send(parser.parseWhoIsData(data));
	});

});


/*
app.post('/gettraceroute', function(req, res){
  console.log('Came in here!!');

	var url = req.body.address;
  console.log('------> ' + url);

<<<<<<< HEAD
	Traceroute.trace(url, (err, hops) => {
    if (err) {throw err;}
=======
  const trace = Traceroute.trace(url);
>>>>>>> sockets-feature

  console.log(url);

  trace.on('hop', (hop) => {

    socket.emit('traceroute', hop);

    console.log(hop)
  });

  trace.on('done', (hops) => {
    console.log(hops);
  });



	Traceroute.trace(url, (err, hops) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log(hops);

    console.log('Came in the traceroute');

    

    var outputData = [];

    for(var i=0; i<hops.length; i++){
    	if(typeof hops[i] !== 'boolean'){
    		for(val in hops[i]){

          console.log(val);

    			outputData.push(
    				Object.assign( 
    					{ip: val},
    					geoip.lookup(val)
    				)
    			);
    		}
    	}
    }
    

    res.send(outputData);
	});

});
*/

/*
app.listen(port, function(){
	console.log("Listening on port -->" + port);
});
*/

server.listen(port, function(){
  console.log("Listening on port " + port);
});







