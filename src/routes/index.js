const express = require('express')
const router = express.Router()
const bookRouter = require('./api/books')
const authorRouter = require('./api/authors')

router.use('/books', bookRouter)
router.use('/authors', authorRouter)

module.exports = router