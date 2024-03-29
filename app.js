// Imported required modules
const express = require("express")
const path = require("path")
const dotenv = require("dotenv");
//const moment = require("moment")

dotenv.config()
const nasaURL = require("./modules/nasa/nasaAPI")
const newsURL = require("./modules/spaceNews/newsAPI")

// Set up Express App
const app = express()
const port = process.env.PORT || 8888

// Define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set up public folder
app.use(express.static(path.join(__dirname, "public")))

// Set up Page Routes
app.get("/", async (req, res) => {
    res.render("index", {title: 'Home'})
}) 
app.get('/apod', async (req,res) => {
    //const currentDate = moment().format('YYYY-MM-DD')
    let picData = await nasaURL.getPic()
    //console.log(picData)
    res.render("apod", {title: 'Atronomy Pictures', picData})
})
app.get("/spaceNews", async (req, res) => {
    let newsData = await newsURL.getNews()
    res.render("spaceNews", {title: 'NASA News', newsData: newsData})
})


app.listen(port, () => {
    console.log(`Weather app is running on port ${port}`)
})