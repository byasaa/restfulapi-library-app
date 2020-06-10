const connection = require('../helper/mysql')

module.exports = {
    getAuthorModel : () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM authors", (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    authorDetailModel : (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM authors WHERE id = ?", id, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    addAuthorModel : (setData) => {
        return new Promise((resolve,reject) => {
            connection.query("INSERT INTO authors SET ?", setData, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    updateAuthorModel : (setData, id) => {
        return new Promise((resolve,reject) => {
            connection.query("UPDATE authors SET ? WHERE id=?", [setData, id], (error, result) => {
                if (error) {
                    reject(error)
                }
                const newData = {
                    id,
                    ...setData
                }
                resolve(newData)
            })
        })
    },
    deleteAuthorModel : (id) => {
        return new Promise((resolve,reject) => {
            connection.query("DELETE FROM authors WHERE id=?", id, (error, result) =>{
                if (error) {
                    reject(error)
                }
                const newData = {
                    id
                }
                resolve(newData)
            })
        })
    }
}