const express = require("express")
const cors = require("cors")
const path = require("path")

const session = require("express-session")

const routes = require("./routes")
const cache = require("./middlewares/cache")
const errorHandler = require("./middlewares/errorHandler")

require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(cache())

app.set("trust proxy", 1)

app.use("/api", routes)
app.use(errorHandler)
app.listen(PORT, () => {
	console.log("Server is running", PORT)
})
