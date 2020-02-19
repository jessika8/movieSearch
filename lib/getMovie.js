const request = require('request');  // npm i request
const {promisify} = require('util');  // util is built in - no need for npm
const promisifiedRequest = promisify(request);


require('dotenv').config()   // npm i dotenv


const getMovie = async () => {

    let data = await promisifiedRequest({
    
        // uri: `https://api.openweathermap.org/data/2.5/weather?q=Tallinn,est&units=metric&appid=${process.env.APPID}`,
        uri: `http://www.omdbapi.com/?apikey=${process.env.APPID}&t=lord+of+the+rings`,
        json: true
    });
    
    
    return data.body
    

}

getMovie();


module.exports = getMovie;