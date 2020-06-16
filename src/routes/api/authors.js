const express = require('express')
const router = express.Router()
const authorController = require('../../controller/AuthorController')
const { verifyToken, checkRole } = require('../../middleware/auth');

router
    .get('/', verifyToken, authorController.getAuthors)
    .get('/:id', verifyToken, authorController.authorDetail)
    .post('/', verifyToken,checkRole(['admin']), authorController.addAuthor)
    .put('/:id', verifyToken,checkRole(['admin']),authorController.updateAuthor)
    .delete('/:id',verifyToken,checkRole(['admin']), authorController.deleteAuthor)

module.exports = router;