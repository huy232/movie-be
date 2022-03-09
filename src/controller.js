const { next } = require("cheerio/lib/api/traversing")
const Model = require("./model")

class Controller {
	static async getSlide(req, res, next) {
		try {
			const slideList = await Model.slide()

			res.json({ success: true, data: slideList })
		} catch (err) {
			next(err)
		}
	}
}

module.exports = Controller
