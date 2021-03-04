const express = require('express')

const bodyParser = require('body-parser')

const rotas = require('../app/rotas/rotas')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

rotas(app)


module.exports = app