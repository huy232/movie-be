const path = require("path")
const axios = require("axios")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

class Model {
	static async getList() {}
}

module.exports = Model
