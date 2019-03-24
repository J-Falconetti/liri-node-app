
require("dotenv").config();
var keys = require('./keys');
var moment = require('moment');
var fs = require('fs');
var axios = require('axios')
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
if (!process.argv[3] === undefined) {
    var input = process.argv.slice(3).join(' ');
    console.log(command)
}
runLiRi(command, input);
function runLiRi(command, input) {
    switch (command) {
        case 'concert-this':
                runBandsInTown(input);
            break;
        case 'spotify-this-song':
            input === undefined ? runSpotify("The Sign") :
                runSpotify(input);
            break;
        case 'movie-this':
            input === undefined ? runOMDB('Mr. Nobody') :
                runOMDB(input);
            break;
        case 'do-what-it-says':
            
};
};

