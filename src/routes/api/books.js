const express = require('express')
const router = express.Router()
const connection = require('../../helper/mysql')

router.get('/', (req,res) => {
    connection.query("SELECT * FROM books", (error, result) => {
        if(error) throw error
        console.log(result)
        res.send('test')
    })
})

module.exports = router;