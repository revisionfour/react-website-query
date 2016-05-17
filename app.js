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

  socket.on('gettraceroute', function(obj){
    var url = obj.url;

    const trace = Traceroute.trace(url);

    trace.on('hop', (hop) => {

      if(typeof hop == 'boolean'){
        return;
      }
      if(typeof hop == 'object'){
        let val = Object.keys(hop)[0];
        socket.emit('traceroute', Object.assign({ip: val}, geoip.lookup(val)));
      }
      else {
        hop.forEach(function(element, index){
          if(typeof element == 'object'){
            let val = Object.keys(element);
            socket.emit('traceroute', Object.assign({ip: val}, geoip.lookup(val)));
          }
        });
      }

    });

    trace.on('done', (hops) => {

      socket.emit('traceroutedone', hops.filter(function(val){
        return typeof val != 'boolean'; 
      }));

      socket.emit('traceroutedone');
      
    });

  });


});

// AJAX WhoIs Lookup

app.post('/getwhoislookup', function(req, res){
	var url = req.body.address;

	whois.lookup(url, function(err, data){
		if (err) {
      console.log(err);
      throw err;
    }

		res.send(parser.parseWhoIsData(data));
	});

});


server.listen(port, function(){
  console.log("Listening on port " + port);
});







