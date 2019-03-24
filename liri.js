require("dotenv").config();
var keys = require('./keys');
var moment = require('moment');
var fs = require('fs');
var axios = require('axios')
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
// if (!process.argv[3] === undefined) {
var input = process.argv.slice(3).join(' ');
console.log(input)
// }
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

function runSpotify(query) {
    console.log(query)
    spotify.search({
        type: 'track',
        query: query,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(data);
        console.log("********************TESTING TESTING**************************");
        console.log(data.tracks.items[0].preview_url);
        console.log("Artist: ",data.tracks.items[0].album.artists[0].name );
        console.log("Song Name: ",data.tracks.items[0].name);
        console.log("link to song: ", )
        console.log("********************TESTING TESTING**************************");
       
   
        // * A preview link of the song from Spotify
   
        // * The album that the song is from
   
    });


}

// axios
//   .get("http://www.omdbapi.com/?apikey=[yourkey]&")
//   .then(function(response) {
//     // If the axios was successful...
//     // Then log the body from the site!
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
// }