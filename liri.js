require("dotenv").config();
var keys = require('./keys');
var moment = require('moment');
moment().format();
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
    console.log(query)
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



axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy&")
    .then(function (response) {

        var movie=response.data

        // response
        console.log("Movie Title: ",movie.Title);
        console.log("Reliease Year",movie.Year);
        console.log("IMBD Rating:",movie.imdbRating);
        console.log("Rotten Tomatoes Rating: ",movie.Ratings[1].Value);
        console.log("Country Produced ",movie.Country);
        console.log("Movie Lang :",movie.Language);
        console.log("Plot: ",movie.Plot);
        console.log("Actors in Movie: ",movie.Actors);

        
    })
    .catch(function (error) {
        console.log(error);

          });
}

// ombd END

// Bands in town
      
function runBandsInTown(input) {
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(response) {    
        for (var i = 0; i < response.data.length; i++) {
console.log ("response " + i)

            var concertResults = 
                "--------------------------------------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name + 
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + moment(response.data[i].datetime).format("L"); //dateArr[0] should be the date separated from the time
            console.log(concertResults);     
        }
    })
    .catch(function (error) {
        console.log(error);
    });
        
}

