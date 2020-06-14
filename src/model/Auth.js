const connection = require('../helper/mysql')

module.exports = {
    getUserByUsername : (username) => {
        return new Promise((resolve, reject)=> {
            connection.query("SELECT * FROM users WHERE username =?", username, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        }) 
    },
    registerModel : (setData) => {
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
};
