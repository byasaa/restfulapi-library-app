const connection = require('../helper/mysql')

module.exports = {
    getBookModel : () => {
        return new Promise((resolve,reject) => {
            connection.query("SELECT books.title as title, books.description as description, books.image as image, genres.name as genre,authors.name as author,books.book_status as status FROM books INNER JOIN genres ON books.genre_id = genres.id INNER JOIN authors ON books.author_id = authors.id", (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }
}