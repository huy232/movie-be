const path = require("path")
const axios = require("axios")
const { API, movieUrl, tvUrl } = require("./constants")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

class Model {
	static async getList() {
		const movie = movieUrl + "popular" + API
		console.log(movie)
	}
}

module.exports = Model
