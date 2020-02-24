const fetch = require('node-fetch')
require('dotenv').config()


async function fetchPeople(person) {

    const url = `https://api.themoviedb.org/3/search/person?api_key=${process.env.APPIDD}&language=en-US&query=${person}&page=1&include_adult=false`

//quentin%20tarantino
//${person}
    let data = await fetch(url)

    // console.log(await data.json()) ### cant call .json() twice apparently ###
    return await data.json()
}

// name()
// fetchPeople()
module.exports = fetchPeople;