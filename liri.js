require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var spotify
var spotify = new Spotify(keys.spotify);

var concert_this = process.argv[2];
var artist = process.argv.splice(3).join(" ");
if (concert_this === "concert-this") {
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

}