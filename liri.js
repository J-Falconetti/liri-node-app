require("dotenv").config();
var keys = require('./keys');
var moment = require('moment');
var fs = require('fs');
var axios = require('axios')
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
// if (!process.argv[3] === undefined) {
var input = process.argv.slice(3).join('+');
// console.log(input)
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
// start Spotify
// this is for the spotify function using node-spoify-api
function runSpotify(query) {
    // console.log(query)
    spotify.search({
        type: 'track',
        query: query,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // loging resuts
        console.log("Artist: ", data.tracks.items[0].album.artists[0].name);
        console.log("Song Name: ", data.tracks.items[0].name);
        console.log("link to song: ", data.tracks.items[0].preview_url)
        console.log("This song is from: ", data.tracks.items[0].album.name)

        // end spotify
    });
}
// start OMDB---NOW WITH AXIOS!
function runOMDB(query) {
    // console.log(query)
}

axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy&")
    .then(function (response) {

        var movie=response.data

        console.log(movie.data);
        console.log("===================================================")
        console.log(movie.Ratings[1])
        console.log("============================================")
        console.log(input);

        // response
        console.log("Movie Title: ",movie.Title);
        console.log("Reliease Year",movie.Year);
        console.log("IMBD Rating:",movie.imdbRating);
        console.log("Rotten Tomatoes Rating: ",movie.Ratings[1])
    })
    .catch(function (error) {
        console.log(error);

        console.log("________________________________________testing area_______________________")
        console.log(response);
        console.log(ouput);
        console.log("________________________________________testing area_______________________")
    });

//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.

// ombd END
// Bands in town
function runOMDB(query) {
    // console.log(query)
}

axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy&")
    .then(function (response) {

