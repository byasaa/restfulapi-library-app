const express = require('express')
const router = express.Router()
const bookController = require('../../controller/BookController');

router
    .all('/*')
    .get('/', bookController.searchBook, bookController.getBooks)
    .post('/', bookController.addBook)
    .put('/:id',bookController.updateBook)
    .delete('/:id',bookController.deleteBook)
    
module.exports = router;