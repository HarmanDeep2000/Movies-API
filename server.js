let express = require("express");

let data = require("./data.json");

//ek naya server banadega but ye sirf create karti hain use chalu nahi karti hain
let server = express();

let a = {
  key1: 1,
  key2: 2,
};

server.get("/movies", function (req, res) {
  res.json(data);
});

server.get("/genre", function (req, res) {
  let allGenreObjecs = data.map(function (el) {
    return el.genre;
  });

  let uniqueGenreObjects = [];

  for (let i = 0; i < allGenreObjecs.length; i++) {
    let genreId = allGenreObjecs[i]["_id"];

    let index = uniqueGenreObjects.findIndex(function (el) {
      return el._id == genreId;
    });

    if (index == -1) {
      uniqueGenreObjects.push(allGenreObjecs[i]);
    }
  }
  res.json(uniqueGenreObjects);
});

//ye line server ko shuru kardeti hain
//ek port par
server.listen(4000);

//http://localhost:4000/your_path
