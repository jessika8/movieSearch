const fetch= require('node-fetch')
require('dotenv').config()  

url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APPIDD}&language=en-US&query=kill%20bill&page=1&include_adult=false`
async function name() {
    let data = await fetch(url)

    console.log(await data.json())
}

name()
