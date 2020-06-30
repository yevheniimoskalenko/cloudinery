const express = require('express')
const upload = require('express-fileupload')
const api = require('./routes/api')

const app = express()
app.use(upload({ useTempFiles: true }))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', api)
module.exports = app
