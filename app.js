const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const connection = require('./src/helper/mysql')

connection.connect( (error) => {
    if (error) throw error
    console.log('Database is Connected')
})

app.get('/', (req, res) => {
    res.send('hello world');
})
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/books', require('./src/routes/api/books'))

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, (req, res) => {
    console.log('This aplication running in http://localhost:'+PORT)
})