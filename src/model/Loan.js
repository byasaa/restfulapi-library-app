const connection = require('../helper/mysql')

module.exports = {
    getLoanModel : () => { 
        return new Promise((resolve, reject) => {
            connection.query('SELECT loans.id,books.id as book_id, books.title, users.id as user_id, users.username, loans.status FROM loans INNER JOIN books on loans.book_id = books.id INNER JOIN users ON loans.user_id = users.id', (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }, 
    getLoanByBookModel : (id) => { 
        return new Promise((resolve, reject) => {
            connection.query('SELECT loans.id,books.id as book_id, books.title, users.id as user_id, users.username, loans.status FROM loans INNER JOIN books on loans.book_id = books.id INNER JOIN users ON loans.user_id = users.id WHERE book_id = ? AND status="Borrow"',id, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    getLoanByUserModel : (userid) => { 
        return new Promise((resolve, reject) => {
            connection.query('SELECT loans.id, books.id as book_id, books.title, books.image, users.id as user_id, users.username, loans.status, loans.created_at, loans.updated_at FROM loans INNER JOIN books ON loans.book_id = books.id INNER JOIN users ON loans.user_id = users.id WHERE loans.user_id = ? ORDER BY created_at DESC',userid, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    patchReturnBookModel :  (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE loans SET ? WHERE id=?', [setData, id], (error, result) => {
                if (error) {
                    reject(error)
                }
                const newData = {
                    id,
                    book_status :'Available',
                    ...setData
                }
                resolve(newData)
                connection.query(`UPDATE books SET book_status="Available" WHERE id=${setData.book_id}`)
            })
        })
    },
}