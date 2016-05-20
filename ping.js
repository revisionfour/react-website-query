'use strict';

const Child = require('child_process');
const Dns = require('dns');
const EventEmitter = require('events');
const Net = require('net');
const Os = require('os');
const Util = require('util');

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
