const fetch = require('node-fetch'); //npm i node-fetch


require('dotenv').config()   // npm i dotenv



async function fetchMovie(movieName, movieDirector) {
    const url = `http://www.omdbapi.com/?apikey=${process.env.APPID}&t=${movieName}`;
    let data = await fetch(url, {method: 'GET'});
    return await data.json();
}




module.exports = fetchMovie;