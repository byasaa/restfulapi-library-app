const express = require('express')
const router = express.Router()
const bookController = require('../../controller/BookController');
const {verifyToken, checkRole} = require('../../middleware/auth')
const multer = require('../../helper/multer')

router
    .get('/', verifyToken, bookController.getBooks)
    .get('/:id',verifyToken, bookController.bookDetail)
    .post('/', verifyToken,checkRole(['admin']), multer.upload.single('image'),bookController.addBook)
    .put('/:id',verifyToken,checkRole(['admin']), multer.upload.single('image'), bookController.updateBook)
    .delete('/:id',verifyToken,checkRole(['admin']), bookController.deleteBook)
    
module.exports = router;