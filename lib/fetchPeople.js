const fetch= require('node-fetch')
url = 'https://api.themoviedb.org/3/search/movie?api_key=f3c1cef22d7981302148e11a8079e60c&language=en-US&query=kill%20bill&page=1&include_adult=false'
async function name() {
    let data = await fetch(url)

    console.log(await data.json())
}

name()
