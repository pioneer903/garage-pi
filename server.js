'use strict';

const express = require('express');
const rpio = require('rpio');

const app = express();
const PORT = 80;

// Door 1
// default: 13-close, 19-open, 11-relay
const openPin = process.env.OPEN_PIN || 19;
const closePin = process.env.CLOSE_PIN || 13;
const relayPin = process.env.RELAY_PIN || 11;

rpio.open(openPin, rpio.INPUT, rpio.PULL_UP);
rpio.open(closePin, rpio.INPUT, rpio.PULL_UP);
rpio.open(relayPin, rpio.OUTPUT, rpio.HIGH);

// Door 2
const openPin2 = process.env.OPEN_PIN || 26;
const closePin2 = process.env.CLOSE_PIN || 22;
const relayPin2 = process.env.RELAY_PIN || 12;

rpio.open(openPin2, rpio.INPUT, rpio.PULL_UP);
rpio.open(closePin2, rpio.INPUT, rpio.PULL_UP);
rpio.open(relayPin2, rpio.OUTPUT, rpio.HIGH);

function getState() {
  return {
    open: !rpio.read(openPin),
    close: !rpio.read(closePin)
  }
}

function getState2() {
  return {
    open: !rpio.read(openPin2),
    close: !rpio.read(closePin2)
  }
}

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.get('/status', function(req, res) {
  res.send(JSON.stringify(getState()));
});


app.get('/status2', function(req, res) {
  res.send(JSON.stringify(getState2()));
});

app.get('/relay', function(req, res) {
  // Simulate a button press
  rpio.write(relayPin, rpio.LOW);
  setTimeout(function() {
    rpio.write(relayPin, rpio.HIGH);
    res.send('done');
  }, 1000);
});

app.get('/relay2', function(req, res) {
  // Simulate a button press
  rpio.write(relayPin2, rpio.LOW);
  setTimeout(function() {
    rpio.write(relayPin2, rpio.HIGH);
    res.send('done');
  }, 1000);
});


app.listen(PORT);
app.use('/assets', express.static('assets'))
console.log('Running on http://localhost:' + PORT);