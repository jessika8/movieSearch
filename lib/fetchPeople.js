const fetch = require('node-fetch')
require('dotenv').config()


async function fetchPeople(person) {

    const url = `https://api.themoviedb.org/3/search/person?api_key=6d76bb828ec37e43e828a75b4ed8a0d7&language=en-US&query=quentin%20tarantino&page=1&include_adult=false`

//quentin%20tarantino
//${person}
    let data = await fetch(url)

    // console.log(await data.json()) ### cant call .json() twice apparently ###
    return await data.json()
}

// name()
// fetchPeople()
module.exports = fetchPeople;