const express = require('express')
const router = express.Router()
const authorController = require('../../controller/AuthorController')
const { verifyToken, checkAdmin } = require('../../middleware/auth');

router
    .get('/', authorController.getAuthors)
    .get('/:id', authorController.authorDetail)
    .post('/', verifyToken,checkAdmin, authorController.addAuthor)
    .put('/:id', verifyToken,checkAdmin,authorController.updateAuthor)
    .delete('/:id',verifyToken,checkAdmin, authorController.deleteAuthor)

module.exports = router;