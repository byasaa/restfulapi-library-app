const express = require('express')
const router = express.Router()
const genreController = require('../../controller/GenreController')
const {verifyToken, checkRole} = require('../../middleware/auth')

router
    .get('/', verifyToken, genreController.getGenres)
    .get('/:id', verifyToken, genreController.genreDetail)
    .post('/',verifyToken,checkRole(['admin']), genreController.addGenre)
    .put('/:id',verifyToken,checkRole(['admin']), genreController.updateGenre)
    .delete('/:id',verifyToken,checkRole(['admin']), genreController.deleteGenre)

module.exports = router;