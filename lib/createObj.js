function createObj(arr) {

    let results = [];

    for (const obj of arr) {
        results.push({
            Name: obj.name,
            Popularity: obj.popularity,
            Known: obj.known_for_department,
        });

        let films = [];

        for (const film of obj.known_for) {
            films.push({
                Title: film.title,
                Release: film.release_date,
                Overview: film.overview,
               Poster: `http://image.tmdb.org/t/p/w185/${film.poster_path}`,
                //let moviePoster = `http://image.tmdb.org/t/p/w185/${data.results[0].known_for[0].poster_path}`

            })
        }

        results[results.length -1].known_for = films
    }  
    return results
}

module.exports = createObj