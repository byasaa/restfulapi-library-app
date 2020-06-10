const express = require('express')
const router = express.Router()
const bookRouter = require('./api/books')

router.use('/books', bookRouter)

module.exports = router