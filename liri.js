require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var spotifyReq = require("node-spotify-api");
var spotify = new spotifyReq(keys.spotify);
var moment = require("moment");
var term = process.argv[2];
var query = process.argv.splice(3).join(" ");
switch(term) 
{
    case "concert-this":
        concertSearch();
        break;
    case "spotify-this-song":
        spotifySong();
        break;
    case "movie-this":
        movieThis();
        break;
}
function concertSearch() {
    var bandURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    axios.get(bandURL).then(function(response) {
        var jsonData = response.data;
    var showData = [
        "Artist: " + query,
        "Venue: " + jsonData[0].venue.name,
        "Location: " + jsonData[0].venue.city,
        "Date: " + moment(jsonData[0].datetime).format("MM/DD/YYYY")
    ].join("\n\n");
    console.log(showData);
    });
}
function spotifySong()
{
    if (!query)
    {
        query = "Ace of Base";
    }
    spotify.search({ type: 'track', query: query, limit: 1}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
          }
          var jsonData = data[0];
         var showData = [
         "Artist(s): " + data.tracks.items[0].artists[0].name,
         "Song Name: " + data.tracks.items[0].name,
         "Preview Link: " + data.tracks.items[0].preview_url,
         "Album: " + data.tracks.items[0].album.name
         
          ].join("\n\n");
          console.log(showData);
    });
}
function movieThis() {
    var queryURL = "https://www.omdbapi.com/?t=" + query + "&plot=full&apikey=trilogy";
    axios.get(queryURL).then(function(response) {
})
}
