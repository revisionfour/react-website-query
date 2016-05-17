'use strict';


const Child = require('child_process');
const Dns = require('dns');
const EventEmitter = require('events');
const Net = require('net');
const Os = require('os');
const Util = require('util');

/*
const internals = {};

const command = 'ping google.com';
const args = ['-c',10];

const ping = Child.spawn(command, args);

ping.stdout.on('data', (data) => {

	console.log(data);

  // emitter.emit('hop', hop);
});
*/


/*Child.spawn('ping -c 4 google.com', function(error, stdout, stderr){
	console.log(stdout);
});*/

const ping = Child.spawn('ping', ['-c','10','google.com']);

ping.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);

  console.log('-------');
});

ping.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ping.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});