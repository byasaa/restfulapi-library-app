const express = require('express')
const router = express.Router()
const bookController = require('../../controller/BookController');
const {verifyToken} = require('../../middleware/auth')
const multer = require('../../helper/multer')

router
    .get('/', verifyToken, bookController.getBooks)
    .get('/:id',bookController.bookDetail)
    .post('/', multer.upload.single('image'),bookController.addBook)
    .put('/:id', multer.upload.single('image'), bookController.updateBook)
    .delete('/:id',bookController.deleteBook)
    
module.exports = router;