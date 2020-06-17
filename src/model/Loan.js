const connection = require('../helper/mysql')

module.exports = {
    getLoanModel : () => { 
        return new Promise((resolve, reject) => {
            connection.query('SELECT loans.id, books.title, users.username, loans.status FROM loans INNER JOIN books on loans.book_id = books.id INNER JOIN users ON loans.user_id = users.id', (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
}