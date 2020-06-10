const connection = require('../helper/mysql')

module.exports = {
    getBooksModel : (limit, page) => {
        let offset = (limit * page) - limit
        return new Promise((resolve,reject) => {
            connection.query("SELECT books.id, books.title, books.description, books.image, genres.name as genre,authors.name as author, books.book_status, books.created_at, books.updated_at FROM books INNER JOIN genres ON books.genre_id = genres.id INNER JOIN authors ON books.author_id = authors.id LIMIT ? OFFSET ?", [limit, offset], (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    searchBookModel : (search, limit, page) => {
        let offset = (limit * page) - limit
        return new Promise((resolve, reject) => {
            const find = `%${search}%`
            connection.query("SELECT books.id, books.title, books.description, books.image, genres.name AS genre,authors.name as author, books.book_status, books.created_at, books.updated_at FROM books INNER JOIN genres ON books.genre_id = genres.id INNER JOIN authors ON books.author_id = authors.id WHERE title LIKE ? OR genres.name LIKE ? OR authors.name LIKE ? OR book_status LIKE ? LIMIT ? OFFSET ?", [find, find, find, find, limit, offset], (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    addBookModel : (setData) => {
        return new Promise((resolve,reject) => {
            connection.query("INSERT INTO books SET ?", setData, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }
}