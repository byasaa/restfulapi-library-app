const express = require('express')
const router = express.Router()
const genreController = require('../../controller/GenreController')

router
    .get('/', genreController.getGenres)
    .get('/:id', genreController.genreDetail)
    .post('/', genreController.addGenre)
    .put('/:id', genreController.updateGenre)
    .delete('/:id',genreController.deleteGenre)

module.exports = router;