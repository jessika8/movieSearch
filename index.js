const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');  //import body-parser
const routes = require('./routes/routes')
const app = express();

 //import the getWeather function
// const getMovie = require('./lib/getMovie');  //this is for require, but now we will use fech
//const fetchMovie = require('./lib/fetchMovie');  //using fech   moved to routs.js

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false})); //Ignore data types and make everything a string
app.use(bodyParser.json());  // Parse data as JSON

app.use('/', routes);  

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');



// MOVED TO routs.js
// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.post('/', async(req, res) => {
//     let movieName = req.body.movieName;
//     let movieDirector = req.body.movieDirector
//     console.log(movieName)
//     let data = await fetchMovie(movieName, movieDirector);
//     console.log(data)

//     if (data.Response !== "False") {

//         let title = data.Title  //in the documendation it is capitalised
//             let year = data.Year
//             let director = data.Director
//             let actors = data.Actors
//             let awards = data.Awards
//             let poster = data.Poster
//             let imbdRaiting = data.imdbRating
//             let genre = data.Genre
//             console.log(data)

//             res.render('index', {data:{Title: title, Year: year, Director: director, Actors: actors, Awards: awards, IMBD: imbdRaiting, Genre: genre}, poster})
//     } else {
//         res.render('index', {err: "Try agan! Something went wrong!"})
//     }
// })





//THIS WAS BEFORE BODY PARSER
// app.get('/', async(req, res) => {

//     let data = await fetchMovie();  //wait for the getWeather function to run and store it in the data variable
   
//     let title = data.Title  //in the documendation it is capitalised
//     let year = data.Year
//     let director = data.Director
//     let actors = data.Actors
//     let awards = data.Awards
//     let poster = data.Poster
//     let imbdRaiting = data.imdbRating
//     let genre = data.Genre
//     console.log(data)

//     // render the index.hbs page
//     res.render('index', {title, year, director, actors, awards, imbdRaiting, poster, genre});
//  })

app.listen(process.env.PORT || 3000, () => {
    console.log('server listening on port 3000')
})