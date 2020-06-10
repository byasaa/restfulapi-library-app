const express = require('express')
const router = express.Router()
const authorController = require('../../controller/AuthorController')

router
    .get('/', authorController.getAuthors)
    .get('/:id', authorController.authorDetail)
    .post('/', authorController.addAuthor)
    .put('/:id', authorController.updateAuthor)
    .delete('/:id',authorController.deleteAuthor)

module.exports = router;