const path = require('path')
const express = require('express')
const hbs = require('hbs')

const routes = require('./routers/routes')
const snippetRoutes = require('./routers/snippetRoute')

const app = express()
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')  //This line setup handlebars... The related information is exptected to be in folder views
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))  //This is a way to customize the server
app.use(snippetRoutes)
app.use(routes)

module.exports = app