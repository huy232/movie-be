require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
const API = process.env.TMDB_API

const movieUrl = `https://api.themoviedb.org/3/movie/`
const tvUrl = `https://api.themoviedb.org/3/tv/`

module.exports = {
	API,
	movieUrl,
	tvUrl,
}
