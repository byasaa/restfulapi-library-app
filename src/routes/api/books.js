const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const bookController = require('../../controller/BookController');

let storage = multer.diskStorage({
    destination: path.join(__dirname + '../../../../public/img/'),
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })

router
    .all('/*')
    .get('/', bookController.searchBook, bookController.getBooks)
    .get('/:id',bookController.bookDetail)
    .post('/', upload.single('image'),bookController.addBook)
    .put('/:id', upload.single('image'), bookController.updateBook)
    .delete('/:id',bookController.deleteBook)
    
module.exports = router;