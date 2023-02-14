const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
// const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const nftRouter = require('./controllers/nfts')
const middleware = require('./utils/middleware')
const { response } = require('express')

// const mongoUrl = config.MONGODB_URI
// logger.info('connecting to', mongoUrl)
// mongoose.connect(mongoUrl)
//     .then(()=> {
//         logger.info('connected to MongoDB')
//     })
//     .catch((error)=> {
//         logger.error('error connecting to MongoDB:', error.message)
//     })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/nfts', nftRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app