const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

 //import the getWeather function
// const getMovie = require('./lib/getMovie');  //this is for require, but now we will use fech
const getMovie = require('./lib/fetchMovie');  //using fech

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');

app.get('/', async(req, res) => {

    let data = await getMovie();  //wait for the getWeather function to run and store it in the data variable
   
    let title = data.Title  //in the documendation it is capitalised
    let year = data.Year
    let director = data.Director
    let actors = data.Actors
    let awards = data.Awards
    let poster = data.Poster
    let imbdRaiting = data.imdbRating
    let genre = data.Genre
    console.log(data)

    // render the index.hbs page
    res.render('index', {title, year, director, actors, awards, imbdRaiting, poster, genre});
 })

app.listen(3000, () => {
    console.log('server listening on port 3000')
})