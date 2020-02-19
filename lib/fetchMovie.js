const fetch = require('node-fetch'); //npm i node-fetch


require('dotenv').config()   // npm i dotenv

const url = `http://www.omdbapi.com/?apikey=${process.env.APPID}&t=lord+of+the+rings`;

async function fetchMovie() {
    let data = await fetch(url, {method: 'GET'});
    return await data.json();
}




module.exports = fetchMovie;