const connection = require('../helper/mysql')

module.exports = {
    getUserByUsername : (username) => {
        return new Promise((resolve, reject)=> {
            connection.query("SELECT users.id, roles.name as role, users.username, users.password, users.created_at, users.updated_at FROM users INNER JOIN roles ON users.id = roles.id WHERE username =?", username, (error, result) => {
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
