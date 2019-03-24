require("dotenv").config();
var keys = require("./keys.js")

// getting needed nodes and adding key from key.js file
var spotifyapi = require ('node-spotify-api');
var request = require ('request');
var moment = require ('moment');
var fs = require ('fs')
var spotify = new spotifyapi(keys.spotify);

var user = process.argv
console.log(user)
