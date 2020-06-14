const config = {
    mysql : {
        host : process.env.DB_HOST,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    },
    secretKey: process.env.JWT_SECRET,
    refreshKey: process.env.JWT_SECRET_REFRESH
}
module.exports = config