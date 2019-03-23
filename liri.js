require("dotenv").config();
var keys = require("./keys")

// getting needed nodes and adding key from key.js file
var spotifyapi = require ('node-spotify-api');
var request = require ('request');
var moment = require ('moment');
var fs = require ('fs')
var spotify = new spotify(keys.spotify);