const express = require('express')
const router = express.Router()
const genreController = require('../../controller/GenreController')

router
    .get('/', genreController.getGenres)
    .get('/:id', genreController.genreDetail)
    .post('/',verifyToken,checkAdmin, genreController.addGenre)
    .put('/:id',verifyToken,checkAdmin, genreController.updateGenre)
    .delete('/:id',verifyToken,checkAdmin, genreController.deleteGenre)

module.exports = router;