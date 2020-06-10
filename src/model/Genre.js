const connection = require('../helper/mysql')

module.exports = {
    getGenreModel : () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM genres", (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    genreDetailModel : (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM genres WHERE id = ?", id, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    addGenreModel : (setData) => {
        return new Promise((resolve,reject) => {
            connection.query("INSERT INTO genres SET ?", setData, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    updateGenreModel : (setData, id) => {
        return new Promise((resolve,reject) => {
            connection.query("UPDATE genres SET ? WHERE id=?", [setData, id], (error, result) => {
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
    deleteGenreModel : (id) => {
        return new Promise((resolve,reject) => {
            connection.query("DELETE FROM genres WHERE id=?", id, (error, result) =>{
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