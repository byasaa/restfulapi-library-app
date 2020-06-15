const express = require('express')
const router = express.Router()
const bookController = require('../../controller/BookController');
const {verifyToken, checkAdmin} = require('../../middleware/auth')
const multer = require('../../helper/multer')

router
    .get('/', verifyToken, bookController.getBooks)
    .get('/:id',verifyToken, bookController.bookDetail)
    .post('/', verifyToken,checkAdmin, multer.upload.single('image'),bookController.addBook)
    .put('/:id',verifyToken,checkAdmin, multer.upload.single('image'), bookController.updateBook)
    .delete('/:id',verifyToken,checkAdmin, bookController.deleteBook)
    
module.exports = router;