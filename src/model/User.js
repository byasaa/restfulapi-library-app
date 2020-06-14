const connection = require('../helper/mysql')

module.exports = {
    getUserModel : () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users", (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    userDetailModel : (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    regUserModel : (setData) => {
        return new Promise((resolve,reject) => {
            connection.query("INSERT INTO users SET ?", setData, (error, result) => {
                if (error) {
                    reject(error)
                }
                const newData = {
                    id :result.insertId,
                    ...setData
                }
                resolve(newData)
            })
        })
    },
    updateUserModel : (setData, id) => {
        return new Promise((resolve,reject) => {
            connection.query("UPDATE users SET ? WHERE id=?", [setData, id], (error, result) => {
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
    deleteUserModel : (id) => {
        return new Promise((resolve,reject) => {
            connection.query("DELETE FROM users WHERE id=?", id, (error, result) =>{
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