const express = require('express')
const router = express.Router()
const bookRouter = require('./api/books')
const authorRouter = require('./api/authors')
const genreRouter = require('./api/genres')
const userRouter = require('./api/users')
const authRouter = require('./api/auth')
const loanRouter = require('./api/loans')

router.use('/auth', authRouter)
router.use('/books', bookRouter)
router.use('/authors', authorRouter)
router.use('/genres', genreRouter)
router.use('/users', userRouter)
router.use('/loans', loanRouter)

module.exports = router