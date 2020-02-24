 const {Router} = require('express');
 const router = Router();  //set up Router

const fetchMovie = require('../lib/fetchMovie');
const fetchPeople = require('../lib/fetchPeople');

// it was app. before - it is from index.js
router.get('/', async (req, res) => {
    res.render('index');
})

//### removed extra bracket after router.get('/peopleFetch'), . . . ###
//                                                         ^
router.get('/peopleFetch', (req, res) => {
    res.render('peopleFetch')  //rendering fechPeople.hbs
})// ### added bracket ###


 // took iot from index.js
// it was app. before
router.post('/', async(req, res) => {
    let movieName = req.body.movieName;
    // let movieDirector = req.body.movieDirector
    console.log(movieName)
    let data = await fetchMovie(movieName);
    console.log(data)

    if (data.Response !== "False") {

        let title = data.Title  //in the documendation it is capitalised
            // let year = data.Year
            let director = data.Director
            let actors = data.Actors
            let awards = data.Awards
            let poster = data.Poster
            let imbdRaiting = data.imdbRating
            let genre = data.Genre
            let plot = data.Plot
            let released = data.Released
            console.log(data)

            res.render('index', {data:{Title: title, Released: released, Director: director, Actors: actors, Awards: awards, IMBD: imbdRaiting, Genre: genre, Plot: plot}, poster})
    } else {
        res.render('index', {err: "Try agan! Something went wrong!"})
    }
})


router.post('/peopleFetch', async (req, res) => {
    let person = req.body.person;
    console.log(person)
    let data = await fetchPeople(person)
    console.log(data)

    let name = data.results[0].name
    let moviePoster = `http://image.tmdb.org/t/p/w185/${data.results[0].known_for[0].poster_path}`; // ### create full image path ###
    let title = data.results[0].known_for[0].title
    let releaseDate = data.results[0].known_for[0].release_date// changed 'know_for' to 'known_for'
    let overview = data.results[0].known_for[0].overview
    let knownForDep = data.results[0].known_for_department

    res.render('peopleFetch', {data:{Name: name, Known: knownForDep, Title: title, Release: releaseDate, Overview: overview}, moviePoster})
})

module.exports = router;