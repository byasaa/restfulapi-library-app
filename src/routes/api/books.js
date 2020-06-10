const express = require('express')
const router = express.Router()
const bookController = require('../../controller/BookController');

router
    .all('/*')
    .get('/', bookController.searchBook, bookController.getBooks)
    .post('/', bookController.addBook)
    // .put('/:id',bookController)
    // .delete('/:id',bookController)
    
module.exports = router;